import { Router } from 'express';
import { OrganizadorController } from './controller';

export class OrganizadorRoutes {
  static get routes(): Router {
    const router = Router();
    const movieController = new OrganizadorController();
    router.get('/', movieController.getOrganizadores);
    router.get('/:id', movieController.getOrganizadorById );
    router.post('/', movieController.createOrganizador );
    router.put('/:id', movieController.updateOrganizador );
    router.delete('/:id', movieController.deleteOrganizador );
    return router;
  }
}

