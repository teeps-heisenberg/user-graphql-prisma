import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { User } from './schema/user.schema';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { type } from 'os';
import { AddUserArgs } from './args/add.user.args';
import { UpdateUserArgs } from './args/update.user.args';

@Resolver((of) => User)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query((returns) => [User], { name: 'users' })
    getAllUsers(): Promise<UserModel[]> {
        return this.userService.findAllUsers();
    }

    @Query((returns) => User, { name: 'findUserById', nullable: true })
    getUserById(
        @Args({ name: 'bookId', type: () => Int }) id: number,
    ): Promise<UserModel> {
        return this.userService.findUserById(id);
    }

    @Mutation((returns) => User, { name: 'deleteUserById' })
    deleteUserById(
        @Args({ name: 'bookId', type: () => Int }) id: number,
    ): Promise<UserModel> {
        return this.userService.deleteUser(id);
    }

    @Mutation((returns) => User, { name: 'createUser' })
    createUser(
        @Args('addUserArgs') addUserArgs: AddUserArgs,
    ): Promise<UserModel> {
        return this.userService.createUser(addUserArgs);
    }

    @Mutation((returns) => User, { name: 'updateUser' })
    updateUser(
        @Args({ name: 'bookId', type: () => Int }) id: number,
        @Args('updateUserArgs') updateUserArgs: UpdateUserArgs,
    ): Promise<UserModel> {
        return this.userService.updateUser(id, updateUserArgs);
    }

}
