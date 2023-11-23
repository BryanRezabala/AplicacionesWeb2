import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTipoentradaDto, UpdateTipoentradaDto } from '../../domain/dtos';


export class TipoentradaController {
  //* DI
  constructor() { }
  public getTipoentradas = async( req: Request, res: Response ) => {
    const tipoentradas = await prisma.tipoentradas.findMany();
    return res.json( tipoentradas );
  };




  public getTipoentradaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const tipoentrada = await prisma.tipoentradas.findFirst({
      where: { id }
    });
    
    ( tipoentrada )
      ? res.json( tipoentrada )
      : res.status( 404 ).json( { error: `Tipoentrada with id ${ id } not found` } );
  };




  public createTipoentrada = async( req: Request, res: Response ) => {
    
    const [error, createTipoentradaDto] = CreateTipoentradaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const tipoentrada = await prisma.tipoentradas.create({
      data: createTipoentradaDto!
    });

    res.json( tipoentrada );

  };



  public updateTipoentrada = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateTipoentradaDto] = UpdateTipoentradaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const tipoentrada = await prisma.tipoentradas.findFirst({
      where: { id }
    });
    if ( !tipoentrada ) return res.status( 404 ).json( { error: `Tipoentrada with id ${ id } not found` } );
    const updatedTipoentrada = await prisma.tipoentradas.update({
      where: { id },
      data: updateTipoentradaDto!.values
    });
    res.json( updatedTipoentrada );
  }


  public deleteTipoentrada = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const tipoentrada = await prisma.tipoentradas.findFirst({
      where: { id }
    });

    if ( !tipoentrada ) return res.status(404).json({ error: `Tipoentrada with id ${ id } not found` });
    const deleted = await prisma.tipoentradas.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Tipoentrada with id ${ id } not found` });
  }
}