import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, 'sql_connection')
    private readonly userRepository: Repository<User>,
  ) {}
  // All Operations

  async create(createUserDto: CreateUserDto): Promise<any> {
    const newUser = await this.userRepository.save(createUserDto);
    return {
      message: `This action added a new user`,
      user: newUser,
    };
  }

  async findAll() {
    const users = await this.userRepository.find();
    return {
      message: `This action returns all Users`,
      users: users,
      count: users.length,
    };
  }

  async findOne(userId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) throw new NotFoundException();

    return {
      message: `This action returns a #${userId} user`,
      user: user,
    };
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException();

    const updateUser = await this.userRepository.save(
      Object.assign(user, updateUserDto),
    );

    return {
      message: `This action updates a #${userId} user`,
      user: updateUser,
    };
  }

  async remove(userId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException();

    const deletedUser = await this.userRepository.delete(userId);
    return {
      message: `This action removes a #${userId} user`,
      user: deletedUser,
    };
  }
}
