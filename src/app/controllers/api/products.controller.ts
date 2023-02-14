import { Context, Get, HttpResponseBadRequest, HttpResponseCreated, HttpResponseOK, Post, ValidateBody, ValidateQueryParam } from '@foal/core';
import { Product } from '../../entities';
import { JWTRequired } from '@foal/jwt';


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
      .getOne();

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
  @JWTRequired()
  async addProduct(ctx: Context) {
    const oldProductName: string = ctx.request.body.name;
    const oldProduct = await Product
    .createQueryBuilder('product')
    .where('product.name = :name', { name: `${oldProductName}`})
    .getOne();

    if(!oldProduct){
    const product = new Product();
    product.name = ctx.request.body.name;
    product.price = ctx.request.body.price;
    product.picture = ctx.request.body.picture;
    product.active = ctx.request.body.active;

    await product.save();
    
    return new HttpResponseCreated();
     } else 
    return new HttpResponseBadRequest({message: 'The product is already registered!'});

  }

}
