import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';
import { User } from '../../entities';

const credentialsSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email', maxLength: 255 },
    password: { type: 'string' }
  },
  required: [ 'email', 'password' ],
  additionalProperties: false,
};

export class AuthController {

  @Post('/login')
  @ValidateBody(credentialsSchema)
  async login(ctx: Context<User|null>) {
    const email = ctx.request.body.email;
    const password = ctx.request.body.password;

    const user = await User.findOneBy({ email });
    if (!user) {
      return new HttpResponseUnauthorized();
    }

    if (!(await verifyPassword(password, user.password))) {
      return new HttpResponseUnauthorized();
    }

    ctx.session!.setUser(user);
    ctx.user = user;

    return new HttpResponseOK({
      id: user.id,
      name: user.email,
    });
  }

  @Post('/logout')
  async logout(ctx: Context) {
    await ctx.session!.destroy();
    return new HttpResponseNoContent();
  }

}
