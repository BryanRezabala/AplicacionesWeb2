import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateClienteDto, UpdateClienteDto } from '../../domain/dtos/';



export class ClienteController {
  //* DI
  constructor() { }
  public getCliente = async( req: Request, res: Response ) => {
    const cliente = await prisma.clientes.findMany();
    return res.json( cliente );
  };




  public getClienteById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const cliente = await prisma.clientes.findFirst({
      where: { id }
    });
    
    ( cliente )
      ? res.json( cliente )
      : res.status( 404 ).json( { error: `Cliente with id ${ id } not found` } );
  };




  public createCliente = async( req: Request, res: Response ) => {
    
    const [error, createClienteDto] = CreateClienteDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const clientes = await prisma.clientes.create({
      data: createClienteDto!
    });

    res.json( clientes );

  };



  public updateCliente = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateClienteDto] = UpdateClienteDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const clientes = await prisma.clientes.findFirst({
      where: { id }
    });
    if ( !clientes ) return res.status( 404 ).json( { error: `cliente with id ${ id } not found` } );
    const updateCliente = await prisma.clientes.update({
      where: { id },
      data: updateClienteDto!.values
    });
    res.json( updateCliente );
  }


  public deleteCliente = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const clientes = await prisma.clientes.findFirst({
      where: { id }
    });

    if ( !clientes ) return res.status(404).json({ error: `Cliente with id ${ id } not found` });
    const deleted = await prisma.clientes.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Cliente with id ${ id } not found` });
  }
}