import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';
import { Product } from '../../entities';


export class ProductsController {

  @Get('/')
  async getProducts(ctx: Context) {
    
    const products = await Product.createQueryBuilder('product').getMany();


    return new HttpResponseOK(products);
  }

  @Get('/:productId')
  @ValidateQueryParam('productId', { type: 'number' }, {required: true})
  async getPrductById(ctx: Context) {
    const productId = ctx.request.query.productId as number;

    const product = await Product
      .createQueryBuilder('product')
      .where('product.id = :productId', { productId })
      .getOneOrFail();

      return new HttpResponseOK(product);
  }

  @Post()
  @ValidateBody({
    type: 'object',
    properties: {
      name: { type: 'string', maxLength: 255},
      price: {type: 'number'},
      picture: {type: 'string'},
      active: {type: 'boolean'}
    }
  })
  @UserRequired()
  async addProduct(ctx: Context) {
    const product = new Product();
    product.name = ctx.request.body.name;
    product.price = ctx.request.body.price;
    product.picture = ctx.request.body.picture;
    product.active = ctx.request.body.active;

    await product.save();

    return new HttpResponseCreated();

  }

}
