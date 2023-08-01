
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddUserArgs {
    username: string;
    email: string;
}

export interface UpdateUserArgs {
    id: number;
    username: string;
    email: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    users(): User[] | Promise<User[]>;
    findUserById(bookId: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    deleteUserById(bookId: number): User | Promise<User>;
    createUser(addUserArgs: AddUserArgs): User | Promise<User>;
    updateUser(bookId: number, updateUserArgs: UpdateUserArgs): User | Promise<User>;
}

type Nullable<T> = T | null;
