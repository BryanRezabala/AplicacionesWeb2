import { Router } from 'express';
import { TipoentradaController } from './controller';

export class TipoentradaRoutes {
  static get routes(): Router {
    const router = Router();
    const movieController = new TipoentradaController();
    router.get('/', movieController.getTipoentradas);
    router.get('/:id', movieController.getTipoentradaById );
    router.post('/', movieController.createTipoentrada );
    router.put('/:id', movieController.updateTipoentrada );
    router.delete('/:id', movieController.deleteTipoentrada );
    return router;
  }
}