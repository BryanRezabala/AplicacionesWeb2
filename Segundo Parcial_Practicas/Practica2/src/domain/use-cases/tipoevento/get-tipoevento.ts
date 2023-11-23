import { TipoEventoEntity } from '../../entities/tipoevento.entity';
import { TipoEventoRepository } from '../../repositories/tipoevento.repository';


export interface GetFuelUseCase {
  execute( id: number ): Promise<TipoEventoEntity>
}


export class GetFuel implements GetFuelUseCase {

  constructor(
    private readonly repository: TipoEventoRepository,
  ) {}

  execute( id: number ): Promise<TipoEventoEntity> {
    return this.repository.findById(id);
  }

}
