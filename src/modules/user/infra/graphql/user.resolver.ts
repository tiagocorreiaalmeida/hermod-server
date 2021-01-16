import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';

@Resolver('User')
export class UserResolver {
  @Query(() => User)
  async user(): Promise<User> {
    return {
      id: '13i0p  ejafwfdasfasdf',
      username: 'test',
      email: 'test@mail.com',
      password: 'test_passwod'
    };
  }
}
