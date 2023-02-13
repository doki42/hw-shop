import { ApiInfo, ApiServer, controller, UseSessions  } from '@foal/core';
import { User } from '../entities';
import { AuthController, ProductsController } from './api';

@ApiInfo({
  title: 'Application API',
  version: '1.0.0'
})
@ApiServer({
  url: '/api'
})
@UseSessions({
  cookie: true,
  user: (id: number) => User.findOneBy({ id }),
})

export class ApiController {

  subControllers = [
    controller('/products', ProductsController),
    controller('/auth', AuthController)
  ];

}

