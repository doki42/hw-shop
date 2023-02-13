// std
import { ok, strictEqual } from 'assert';

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';

// App
import { AuthController } from './auth.controller';
import { User } from '../../entities';

describe('AuthController', () => {

  let controller: AuthController;

  beforeEach(() => controller = createController(AuthController));

  describe('has a "login" method that', () => {

    it('should handle requests at POST /login.', () => {
      strictEqual(getHttpMethod(AuthController, 'login'), 'POST');
      strictEqual(getPath(AuthController, 'login'), '/login');
    });

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context<User|null>({});
      ok(isHttpResponseOK(controller.login(ctx)));
    });

  });

});
