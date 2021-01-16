import { EntityManager, EntityRepository } from 'typeorm';
import { User } from '../../domain/User';
import { IUserRepo } from '../../repos/IUserRepo';
import { User as UserModel } from './user.entity';

@EntityRepository(UserModel)
export class UserRepository implements IUserRepo {
  constructor(private readonly manager: EntityManager) {}

  async findUserById(id: string): Promise<User | null> {
    const user = await this.manager.findOne(UserModel, id);

    return user ?? null;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.manager.findOne(UserModel, { where: { email } });

    return user ?? null;
  }

  async findUserByEmailOrUsername(
    email: string,
    username: string
  ): Promise<User | null> {
    const user = await this.manager.findOne(UserModel, {
      where: { email, username }
    });

    return user ?? null;
  }

  async exists(id: string): Promise<boolean> {
    const user = await this.manager.findOne(UserModel, id);

    return !!user;
  }

  async save(user: User): Promise<void> {
    const userToPersistence = this.manager.create(UserModel, user);

    await this.manager.save(userToPersistence);
  }
}
