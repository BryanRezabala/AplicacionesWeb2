import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateEventoDto, UpdateEventoDto } from '../../domain/dtos';


export class EventoController {
  //* DI
  constructor() { }
  public getEventos = async( req: Request, res: Response ) => {
    const eventos = await prisma.evento.findMany();
    return res.json( eventos );
  };




  public getEventoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const eventos = await prisma.evento.findFirst({
      where: { id }
    });
    
    ( eventos )
      ? res.json( eventos )
      : res.status( 404 ).json( { error: `Evento with id ${ id } not found` } );
  };




  public createEvento = async( req: Request, res: Response ) => {
    
    const [error, createEventoDto] = CreateEventoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const eventos = await prisma.evento.create({
      data: createEventoDto!
    });

    res.json( eventos );

  };



  public updateEvento = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updatedEventoDto] = UpdateEventoDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const eventos = await prisma.evento.findFirst({
      where: { id }
    });
    if ( !eventos ) return res.status( 404 ).json( { error: `Evento with id ${ id } not found` } );
    const updatedEvento = await prisma.evento.update({
      where: { id },
      data: updatedEventoDto!.values
    });
    res.json( updatedEvento );
  }


  public deleteEvento = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const eventos = await prisma.evento.findFirst({
      where: { id }
    });

    if ( !eventos ) return res.status(404).json({ error: `Evento with id ${ id } not found` });
    const deleted = await prisma.evento.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Evento with id ${ id } not found` });
  }
}