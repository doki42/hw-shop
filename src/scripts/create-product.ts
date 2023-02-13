import { Product } from '../app/entities';
import { dataSource } from '../db';



export const schema = {
  additionalProperties: false,
  properties: {
    name: { type: 'string', maxLength: 255},
    price: { type: 'number'},
    picture: { type: 'string'},
    active: { type: 'boolean'}

  },
  required: [ 'name', 'price', 'active' ],
  type: 'object',
};

export async function main(args: { name: string, price: number, picture?: string, active: boolean }) {
  await dataSource.initialize();

  const product = new Product();
  product.name = args.name;
  product.price = args.price;
  product.picture = args.picture;
  product.active = args.active;

  try {
    console.log(await product.save());
  } catch (error: any) {
    console.error(error);
  } finally {
    await dataSource.destroy();
  }

}
