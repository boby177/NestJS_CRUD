import { Controller, Get, Req, Res } from '@nestjs/common';
import { Body, Inject, Post } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { CreatePaymentDTO } from '../../dto/CreatePayment.dto';
import { PaymentsService } from '../../services/payments/payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(
    @Inject('PAYMENTS_SERVICE')
    private readonly paymentsService: PaymentsService,
  ) {}
  @Get()
  getPayments(@Req() request: Request, @Res() response: Response) {
    const { count, page } = request.query;
    if (!count || !page) {
      response
        .status(400)
        .send({ msg: 'Missing count or page query parameter' });
    } else {
      response.send(200);
    }
  }

  @Post('create')
  async createPayment(@Body() createPaymentDTO: CreatePaymentDTO) {
    const response = await this.paymentsService.createPayment(createPaymentDTO);
    return response;
  }
}
