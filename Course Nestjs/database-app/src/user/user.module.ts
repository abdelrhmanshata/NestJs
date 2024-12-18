import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

const schema = [User]; // entity module

@Module({
  imports: [TypeOrmModule.forFeature(schema, 'sql_connection')],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
