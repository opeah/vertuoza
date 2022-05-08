import { IsEmail, IsNotEmpty } from 'class-validator';

export class DtoLoginForm {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
