import { Router } from 'express';
import { TipoEventoController} from './controller';


export class TipoEventoRoutes {


  static get routes(): Router {

    const router = Router();

    const todoController = new TipoEventoController();

    router.get('/', todoController.getTipoevento);
    router.get('/:id', todoController.getTipoeventoById);
    
    router.post('/', todoController.createTipoevento );
    router.put('/:id', todoController.updateTipoevento );
    router.delete('/:id', todoController.deleteTipoevento );


    return router;
  }


}

