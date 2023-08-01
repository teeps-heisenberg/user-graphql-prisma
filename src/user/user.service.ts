import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    async findAllUsers(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    async findUserById(id: number): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: {
                id: id,
            },
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prismaService.user.create({
            data: data,
        });
    }

    async deleteUser(id: number): Promise<User> {
        return this.prismaService.user.delete({
            where: {
                id: id,
            },
        });
    }

    async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        return this.prismaService.user.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
}
