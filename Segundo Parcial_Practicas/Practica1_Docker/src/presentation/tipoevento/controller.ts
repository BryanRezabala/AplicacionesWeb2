import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTipoEventoDto, UpdateTipoEventoDto } from '../../domain/dtos';


export class TipoEventoController {
  //* DI
  constructor() { }
  public getTipoevento = async( req: Request, res: Response ) => {
    const tipoeventos = await prisma.tipoEvento.findMany();
    return res.json( tipoeventos );
  };




  public getTipoeventoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const tipoevento = await prisma.tipoEvento.findFirst({
      where: { id }
    });
    
    ( tipoevento )
      ? res.json( tipoevento )
      : res.status( 404 ).json( { error: `Tipo Evento with id ${ id } not found` } );
  };




  public createTipoevento = async( req: Request, res: Response ) => {
    
    const [error, createTipoEventoDto] = CreateTipoEventoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const tipoEvento = await prisma.tipoEvento.create({
      data: createTipoEventoDto!
    });

    res.json( tipoEvento );

  };



  public updateTipoevento = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateTipoEventoDto] = UpdateTipoEventoDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const tipoevento = await prisma.tipoEvento.findFirst({
      where: { id }
    });
    if ( !tipoevento ) return res.status( 404 ).json( { error: `Tipo evento with id ${ id } not found` } );
    const updatedTipoevento = await prisma.tipoEvento.update({
      where: { id },
      data: updateTipoEventoDto!.values
    });
    res.json( updatedTipoevento );
  }


  public deleteTipoevento = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const tipoevento = await prisma.tipoEvento.findFirst({
      where: { id }
    });

    if ( !tipoevento ) return res.status(404).json({ error: `Tipo evento with id ${ id } not found` });
    const deleted = await prisma.tipoEvento.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Tipo evento with id ${ id } not found` });
  }
}