import { TipoEventoEntity } from '../../entities/tipoevento.entity';
import { TipoEventoRepository } from '../../repositories/tipoevento.repository';


export interface DeleteTipoEventoUseCase {
  execute( id: number ): Promise<TipoEventoEntity>
}

export class DeleteTipoEvento implements DeleteTipoEventoUseCase {
  
  constructor(
    private readonly repository: TipoEventoRepository,
  ) {}
  
  execute( id: number ): Promise<TipoEventoEntity> {
    return this.repository.deleteById(id);
  }

}
