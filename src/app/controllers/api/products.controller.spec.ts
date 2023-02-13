// std
import { ok, strictEqual } from 'assert';

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';

// App
import { ProductsController } from './products.controller';

describe('ProductsController', () => {

  let controller: ProductsController;

  beforeEach(() => controller = createController(ProductsController));

  describe('has a "getProducts" method that', () => {

    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(ProductsController, 'products'), 'GET');
      strictEqual(getPath(ProductsController, 'products'), '/');
    });

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context({});
      ok(isHttpResponseOK(controller.getProducts(ctx)));
    });

  });

});
