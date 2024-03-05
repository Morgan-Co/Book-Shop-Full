import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class UserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(6, {
    message: 'Your password must be at least 6 characters long',
  })
  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
