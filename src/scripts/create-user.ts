import { hashPassword } from '@foal/core';

// App
import { User } from '../app/entities';
import { dataSource } from '../db';

export const schema = {
  additionalProperties: false,
  properties: {
    email: { type: 'string', format: 'email', maxLength: 255 },
    password: { type: 'string' },
  },
  required: [ 'email', 'password' ],
  type: 'object',
};

export async function main(args: {email: string, password: string }) {
  const user = new User();
  user.email = args.email;
  user.password = await hashPassword(args.password);
  
  await dataSource.initialize();

  try {
    
    console.log(await user.save());
  } catch (error: any) {
    console.error(error.message);
  } finally {
    await dataSource.destroy();
  }
}
