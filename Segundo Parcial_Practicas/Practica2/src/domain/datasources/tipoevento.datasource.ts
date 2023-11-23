
import { CreateTipoEventoDto, UpdateTipoEventoDto } from '../dtos';
import { TipoEventoEntity } from '../entities/tipoevento.entity';

export abstract class TipoEventoDatasource {

    abstract create( createTipoEventoDto: CreateTipoEventoDto ): Promise<TipoEventoEntity>;
  
    abstract getAll(): Promise<TipoEventoEntity[]>;
  
    abstract findById( id: number ): Promise<TipoEventoEntity>;
    abstract updateById( updateTipoEventoDto: UpdateTipoEventoDto ): Promise<TipoEventoEntity>;
    abstract deleteById( id: number ): Promise<TipoEventoEntity>;
  
  }