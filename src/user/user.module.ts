import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [PrismaService, UserService, UserResolver],
})
export class UserModule { }
