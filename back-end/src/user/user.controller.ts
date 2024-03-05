import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { CurrentUser } from '../auth/decorators/user.decorator';
import { UserDto } from './dto/user.dto';
import { AuthService } from '../auth/auth.service';
import { Response } from 'express';

@Controller('user/profile')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  @Auth()
  async profile(@CurrentUser('id') id: string) {
    return this.userService.getProfile(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put()
  @Auth()
  async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
    return this.userService.update(id, dto);
  }

  @HttpCode(200)
  @Delete()
  @Auth()
  async deleteProfile(
    @Res({ passthrough: true }) res: Response,
    @CurrentUser('id') id: string,
  ) {
    this.authService.removeRefreshTokenFromResponse(res);
    return this.userService.deleteProfile(id);
  }

  @HttpCode(200)
  @Post('add-book')
  @Auth()
  async addBookInCart(@CurrentUser('id') userId: string, @Body() data) {
    // return { bookId };
    const newData = {
      userId,
      bookId: data.bookId,
    };
    return this.userService.addBookInCart(newData);
  }
}
