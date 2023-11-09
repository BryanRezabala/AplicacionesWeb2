import { Router } from 'express';
import { VentaentradasController } from './controller';

export class VentaentradasRoutes {
  static get routes(): Router {
    const router = Router();
    const movieController = new VentaentradasController();
    router.get('/', movieController.getVentaentrada);
    router.get('/:id', movieController.getVentaentradasById );
    router.post('/', movieController.createVentaentradas );
    router.put('/:id', movieController.updateVentaentradas );
    router.delete('/:id', movieController.deleteVentaentradas );
    return router;
  }
}