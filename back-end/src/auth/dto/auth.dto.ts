import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail({}, { message: 'Enter the correct email' })
  email: string;

  @MinLength(6, {
    message: 'Your password must be at least 6 characters long',
  })
  @IsString()
  password: string;
}
