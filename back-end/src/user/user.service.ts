import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from '../auth/dto/auth.dto';
import { PrismaService } from '../prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getProfile(id: string) {
    const profile = await this.getById(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = profile;
    return { user: rest };
  }

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      password: await hash(dto.password),
      description: '',
      name: '',
    };
    return this.prisma.user.create({ data: user });
  }

  async update(id: string, dto: UserDto) {
    let data = dto;
    console.log(dto);

    if (data.password) {
      data = { ...dto, password: await hash(dto.password) };
    }
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteProfile(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  async addBookInCart(data) {
    // return data;
    return this.prisma.userBooks.create({
      data,
    });
    // return this.prisma.userBooks.findMany();
  }
}
