import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateVentaentradasDto, UpdateVentaentradasDto } from '../../domain/dtos';


export class VentaentradasController {
  //* DI
  constructor() { }
  public getVentaentrada = async( req: Request, res: Response ) => {
    const ventaentrada = await prisma.ventaEntrada.findMany();
    return res.json( ventaentrada );
  };




  public getVentaentradasById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const ventaentradas = await prisma.ventaEntrada.findFirst({
      where: { id }
    });
    
    ( ventaentradas )
      ? res.json( ventaentradas )
      : res.status( 404 ).json( { error: `Ventaentradas with id ${ id } not found` } );
  };




  public createVentaentradas = async( req: Request, res: Response ) => {
    
    const [error, createVentaentradasDto] = CreateVentaentradasDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const ventaentradas = await prisma.ventaEntrada.create({
      data: createVentaentradasDto!
    });

    res.json( ventaentradas );

  };



  public updateVentaentradas = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateVentaentradasDto] = UpdateVentaentradasDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const ventaentradas = await prisma.ventaEntrada.findFirst({
      where: { id }
    });
    if ( !ventaentradas ) return res.status( 404 ).json( { error: `Ventaentradas with id ${ id } not found` } );
    const updatedVentaentradas = await prisma.ventaEntrada.update({
      where: { id },
      data: updateVentaentradasDto!.values
    });
    res.json( updatedVentaentradas );
  }


  public deleteVentaentradas = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const ventaentradas = await prisma.ventaEntrada.findFirst({
      where: { id }
    });

    if ( !ventaentradas ) return res.status(404).json({ error: `Ventaentradas with id ${ id } not found` });
    const deleted = await prisma.ventaEntrada.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Ventaentradas with id ${ id } not found` });
  }
}