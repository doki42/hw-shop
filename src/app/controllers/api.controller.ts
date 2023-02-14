import { ApiInfo, ApiServer, controller } from '@foal/core';
import { JWTOptional } from '@foal/jwt';
import { AuthController, ProductsController } from './api';

@ApiInfo({
  title: 'Application API',
  version: '1.0.0'
})
@ApiServer({
  url: '/api'
})
@JWTOptional()

export class ApiController {

  subControllers = [
    controller('/products', ProductsController),
    controller('/auth', AuthController),
  ];

}

