import { Module } from '@nestjs/common';
import { UserResolver } from './graphql/user.resolver';

@Module({
  providers: [UserResolver]
})
export class UserModule {}
