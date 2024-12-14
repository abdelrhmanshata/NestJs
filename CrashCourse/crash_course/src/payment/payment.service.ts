import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const newPayment = await this.paymentsRepository.save(createPaymentDto);
    return {
      message: `This action added a new payment`,
      payment: newPayment, // Include the `res` object in the response
    };
  }

  async findAll() {
    const allPayments = await this.paymentsRepository.find();
    return {
      message: `This action returns all payment`,
      payment: allPayments, // Include the `res` object in the response
    };
  }

  async findOne(id: number) {
    const objPayment = await this.paymentsRepository.findOneBy({ id });
    return {
      message: `This action returns a #${id} payment`,
      payment: objPayment, // Include the `res` object in the response
    };
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const existingPayment = await this.paymentsRepository.findOneBy({ id });
    existingPayment.currency = updatePaymentDto.currency;
    const updatePayment = await this.paymentsRepository.save(
      Object.assign(existingPayment, updatePaymentDto), // update value in existing payment by update payment
    );
    return {
      message: `This action updates a #${id} payment`,
      payment: updatePayment, // Include the `res` object in the response
    };
  }

  async remove(id: number) {
    const deletedPayment = await this.paymentsRepository.delete(id);
    return {
      message: `This action removes a #${id} payment`,
      payment: deletedPayment, // Include the `res` object in the response
    };
  }
}
