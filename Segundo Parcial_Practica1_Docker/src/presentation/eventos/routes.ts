import { Router } from 'express';
import { EventoController } from './controller';


export class EventoRoutes {


  static get routes(): Router {

    const router = Router();

    const todoController = new EventoController();

    router.get('/', todoController.getEventos );
    router.get('/:id', todoController.getEventoById );
    
    router.post('/', todoController.createEvento );
    router.put('/:id', todoController.updateEvento );
    router.delete('/:id', todoController.deleteEvento );


    return router;
  }


}

