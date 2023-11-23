import { CreateTipoEventoDto } from '../../dtos';
import { TipoEventoEntity } from '../../entities/tipoevento.entity';
import { TipoEventoRepository } from '../../repositories/tipoevento.repository';


export interface CreateTipoEventoUseCase {
  execute( dto: CreateTipoEventoDto ): Promise<TipoEventoEntity>
}

// ctrl+ shift + l
export class CreateTipoEvento implements CreateTipoEventoUseCase {
  
  constructor(
    private readonly repository: TipoEventoRepository,
  ) {}
  
  execute( dto: CreateTipoEventoDto ): Promise<TipoEventoEntity> {
    return this.repository.create(dto);
  }

}