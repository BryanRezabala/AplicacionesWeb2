import { UpdateTipoEventoDto } from '../../dtos';
import { TipoEventoEntity } from '../../entities/tipoevento.entity';
import { TipoEventoRepository } from '../../repositories/tipoevento.repository';


export interface UpdateTipoEventoUseCase {
  execute( dto: UpdateTipoEventoDto ): Promise<TipoEventoEntity>
}


export class UpdateFuel implements UpdateTipoEventoUseCase {

  constructor(
    private readonly repository: TipoEventoRepository,
  ) {}

  execute( dto: UpdateTipoEventoDto ): Promise<TipoEventoEntity> {
    return this.repository.updateById(dto);
  }

}
