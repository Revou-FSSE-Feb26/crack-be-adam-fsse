import { Injectable, Optional } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminsService {
  constructor(@Optional() private readonly prisma: PrismaService) {}
  create(createAdminDto: CreateAdminDto) {
    return this.prisma.admin.create({ data: { ...createAdminDto, poto: createAdminDto.poto ?? '' } });
  }

  findAll() {
    return this.prisma.admin.findMany();
  }

  findOne(id: string) {
    return this.prisma.admin.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.prisma.admin.update({ where: { id }, data: updateAdminDto });
  }

  remove(id: string) {
    return this.prisma.admin.delete({ where: { id } });
  }
}
