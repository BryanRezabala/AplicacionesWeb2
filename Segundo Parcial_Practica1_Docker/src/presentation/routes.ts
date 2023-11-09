import { Router } from 'express';

import {  EventoRoutes  } from './eventos/routes';
import {  OrganizadorRoutes  } from './organizadores/routes';
import {  VentaentradasRoutes } from './ventaentradas/routes';
import {  TipoentradaRoutes } from './tipoentrada/routes';
import {  ClienteRoutes } from './clientes/routes';
import {  TipoEventoRoutes } from './tipoevento/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/eventos', EventoRoutes.routes );
    router.use('/api/organizadores', OrganizadorRoutes.routes );
    router.use('/api/ventaentradas', VentaentradasRoutes.routes );
    router.use('/api/tipoentradas', TipoentradaRoutes.routes );
    router.use('/api/cliente', ClienteRoutes.routes );
    router.use('/api/tipoevento', TipoEventoRoutes.routes );

    
    return router;
  }


}

