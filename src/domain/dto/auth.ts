import { IsEmail, IsNotEmpty } from 'class-validator';

export class DtoLoginForm {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class DtoRegisterForm {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export interface DtoToken {
  token: string;
}
