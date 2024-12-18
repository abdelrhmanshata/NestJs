import { Model } from 'mongoose';
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Employee } from '../../interfaces/employee.interface';
import { CreateEmployeeDto } from '../../dto/Admin/create-employee.dto';
import { UpdateEmployeeDto } from '../../dto/Admin/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('Employee_MODEL')
    private employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    try {
      const newEmployee = new this.employeeModel(createEmployeeDto);
      return await newEmployee.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists.');
      }
      throw error; // Re-throw any other errors
    }
  }

  async findAll(): Promise<{ data: Employee[]; count: number }> {
    const allUsers = await this.employeeModel.find().exec();
    return {
      data: allUsers,
      count: allUsers.length,
    };
  }

  async findOne(id: string): Promise<Employee> {
    const employee = await this.employeeModel.findById(id).exec();
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    try {
      const updatedEmployee = await this.employeeModel
        .findByIdAndUpdate(id, updateEmployeeDto, { new: true })
        .exec();
      if (!updatedEmployee) {
        throw new NotFoundException(`Employee with ID ${id} not found`);
      }
      return updatedEmployee;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists.');
      }
      throw error; // Re-throw any other errors
    }
  }

  async delete(id: string): Promise<{ message: string }> {
    const result = await this.employeeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return {
      message: 'Delete employee successfully',
    };
  }
}
