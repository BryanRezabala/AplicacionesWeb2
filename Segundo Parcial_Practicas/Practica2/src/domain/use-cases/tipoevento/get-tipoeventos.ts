import { TipoEventoEntity } from '../../entities/tipoevento.entity';
import { TipoEventoRepository } from '../../repositories/tipoevento.repository';


export interface GetFuelsUseCase {
  execute(): Promise<TipoEventoEntity[]>
}


export class GetFuels implements GetFuelsUseCase {

  constructor(
    private readonly repository: TipoEventoRepository,
  ) {}

  execute(): Promise<TipoEventoEntity[]> {
    return this.repository.getAll();
  }

}
