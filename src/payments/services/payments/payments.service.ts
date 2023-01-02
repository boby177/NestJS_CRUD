import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDTO } from 'src/payments/dto/CreatePayment.dto';

@Injectable()
export class PaymentsService {
  private users = [
    {
      email: 'bobys@gmail.com',
    },
    {
      email: 'indrin@gmail.com',
    },
    {
      email: 'zahran@gmail.com',
    },
  ];

  async createPayment(createPaymentDTO: CreatePaymentDTO) {
    const { email } = createPaymentDTO;
    const user = this.users.find((user) => user.email === email);

    if (user)
      return {
        status: 'success',
      };
    else {
      throw new BadRequestException();
    }
  }
}
