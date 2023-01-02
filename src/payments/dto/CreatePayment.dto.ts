import { IsNotEmpty, IsEmail, IsNumberString } from 'class-validator';

export class CreatePaymentDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumberString()
  price: number;
}
