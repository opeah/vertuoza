import { IsNotEmpty } from 'class-validator';

import { DtoUserQuery } from './user';

export class DtoEducationForm extends DtoUserQuery {
  @IsNotEmpty()
  school_name: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  country: string;
  @IsNotEmpty()
  field_of_study: string;
  @IsNotEmpty()
  education_level: string;
}
