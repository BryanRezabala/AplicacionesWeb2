import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateOrganizadorDto, UpdateOrganizadorDto } from '../../domain/dtos';


export class OrganizadorController {
  //* DI
  constructor() { }
  public getOrganizadores = async( req: Request, res: Response ) => {
    const organizadores = await prisma.organizadores.findMany();
    return res.json( organizadores );
  };




  public getOrganizadorById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const organizador = await prisma.organizadores.findFirst({
      where: { id }
    });
    
    ( organizador )
      ? res.json( organizador )
      : res.status( 404 ).json( { error: `Organizador with id ${ id } not found` } );
  };




  public createOrganizador = async( req: Request, res: Response ) => {
    
    const [error, createOrganizadorDto] = CreateOrganizadorDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const organizador = await prisma.organizadores.create({
      data: createOrganizadorDto!
    });

    res.json( organizador );

  };



  public updateOrganizador = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateOrganizadorDto] = UpdateOrganizadorDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const organizador = await prisma.organizadores.findFirst({
      where: { id }
    });
    if ( !organizador ) return res.status( 404 ).json( { error: `Organizador with id ${ id } not found` } );
    const updatedOrganizador = await prisma.organizadores.update({
      where: { id },
      data: updateOrganizadorDto!.values
    });
    res.json( updatedOrganizador );
  }


  public deleteOrganizador = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const organizador = await prisma.organizadores.findFirst({
      where: { id }
    });

    if ( !organizador ) return res.status(404).json({ error: `Organizador with id ${ id } not found` });
    const deleted = await prisma.organizadores.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Organizador with id ${ id } not found` });
  }
}