import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException('Email already registered');
    const user = await this.prisma.user.create({
      data: { nama: dto.nama, email: dto.email, passwordHash: await bcrypt.hash(dto.password, 12), role: dto.role ?? 'STUDENT' },
    });
    return this.signUser(user);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) throw new UnauthorizedException('Invalid email or password');
    return this.signUser(user);
  }

  private signUser(user: { id: string; nama: string; email: string; role: string }) {
    return { accessToken: this.jwt.sign({ sub: user.id, email: user.email, role: user.role }), user: { id: user.id, nama: user.nama, email: user.email, role: user.role } };
  }
}