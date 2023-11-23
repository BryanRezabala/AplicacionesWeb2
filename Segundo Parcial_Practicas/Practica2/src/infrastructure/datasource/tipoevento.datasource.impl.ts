import { prisma } from '../../data/postgres';
import { CreateTipoEventoDto, TipoEventoDatasource, TipoEventoEntity, UpdateTipoEventoDto } from '../../domain';




export class TipoEventoDatasourceImpl implements TipoEventoDatasource {

  async create( createTipoEventoDto: CreateTipoEventoDto ): Promise<TipoEventoEntity> {
    const tipoevento = await prisma.tipoevento.create({
      data: createTipoEventoDto
    });

    return TipoEventoEntity.fromObject( tipoevento );
  }

  async getAll(): Promise<TipoEventoEntity[]> {
    const tipoeventos = await prisma.tipoevento.findMany();
    return tipoeventos.map( tipoevento => TipoEventoEntity.fromObject(tipoevento) );
  }

  async findById( id: number ): Promise<TipoEventoEntity> {
    const tipoevento = await prisma.tipoevento.findFirst({
      where: { id }
    });

    if ( !tipoevento ) throw `Tipo Evento with id ${ id } not found`;
    return TipoEventoEntity.fromObject(tipoevento);
  }

  async updateById( updateTipoEventoDto: UpdateTipoEventoDto ): Promise<TipoEventoEntity> {
    await this.findById( updateTipoEventoDto.id );
    
    const updatedTipoEvento = await prisma.tipoevento.update({
      where: { id: updateTipoEventoDto.id },
      data: updateTipoEventoDto!.values
    });

    return TipoEventoEntity.fromObject(updatedTipoEvento);
  }

  async deleteById( id: number ): Promise<TipoEventoEntity> {
    await this.findById( id );
    const deleted = await prisma.tipoevento.delete({
      where: { id }
    });

    return TipoEventoEntity.fromObject( deleted );
  }

}