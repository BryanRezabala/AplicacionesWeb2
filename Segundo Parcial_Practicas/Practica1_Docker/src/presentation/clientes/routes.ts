import { Router } from 'express';
import { ClienteController} from './controller';


export class ClienteRoutes {


  static get routes(): Router {

    const router = Router();

    const todoController = new ClienteController();

    router.get('/', todoController.getCliente );
    router.get('/:id', todoController.getClienteById );
    
    router.post('/', todoController.createCliente );
    router.put('/:id', todoController.updateCliente );
    router.delete('/:id', todoController.deleteCliente );


    return router;
  }


}

