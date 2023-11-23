import { CreateTipoEventoDto, TipoEventoDatasource, TipoEventoEntity, TipoEventoRepository, UpdateTipoEventoDto } from '../../domain';


export class TipoEventoRepositoryImpl implements TipoEventoRepository {

  constructor(
    private readonly datasource: TipoEventoDatasource,
  ) { }


  create( createTipoEventoDto: CreateTipoEventoDto ): Promise<TipoEventoEntity> {
    return this.datasource.create( createTipoEventoDto );
  }

  getAll(): Promise<TipoEventoEntity[]> {
    return this.datasource.getAll();
1  }

  findById( id: number ): Promise<TipoEventoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateTipoEventoDto: UpdateTipoEventoDto ): Promise<TipoEventoEntity> {
    return this.datasource.updateById( updateTipoEventoDto );
  }

  deleteById( id: number ): Promise<TipoEventoEntity> {
    return this.datasource.deleteById( id );
  }

}