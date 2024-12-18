import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { EmployeeService } from '../../services/Admin/employee.service';
import { CreateEmployeeDto } from '../../dto/Admin/create-employee.dto';
import { UpdateEmployeeDto } from '../../dto/Admin/update-employee.dto';
import { Roles } from '../../guards/roles.decorator';
import { EmployeesGuard } from '../../guards/employees.guard';

@Controller('employees')
@UseGuards(EmployeesGuard) // if i want use this guard in only this Class and all end-points.
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // ================================================================= //
  // @desc get all employees
  // @route GET /employees
  // @access Private [Admin,Manger]
  @Roles(['admin', 'manger'])
  // @UseGuards(EmployeesGuard) // if i want use this guard in only this end-point.
  @Get()
  async findAll() {
    return await this.employeeService.findAll();
  }

  // ================================================================= //
  // @desc get employee by id
  // @route GET /employees/:id
  // @access Private [Admin,Manger]
  @Roles(['admin', 'manger'])
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.employeeService.findOne(id);
  }

  // ================================================================= //
  // @desc add new employee
  // @route POST /employees
  // @access Private [Admin]
  @Roles(['admin'])
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeService.create(createEmployeeDto);
  }

  // ================================================================= //
  // @desc  update employee
  // @route PUT /employees/:id
  // @access Private [Admin,Manger]
  @Roles(['admin', 'manger'])
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return await this.employeeService.update(id, updateEmployeeDto);
  }

  // ================================================================= //
  // @desc delete employee
  // @route DELETE /employees/:id
  // @access Private [Admin]
  @Roles(['admin'])
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    await this.employeeService.delete(id);
  }
}
