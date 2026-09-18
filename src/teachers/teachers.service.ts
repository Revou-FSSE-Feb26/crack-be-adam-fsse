import { Injectable, Optional } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeachersService {
  constructor(@Optional() private readonly prisma: PrismaService) {}

  create(createTeacherDto: CreateTeacherDto) {
    return this.prisma.teacher.create({ data: { ...createTeacherDto, poto: createTeacherDto.poto ?? '' } });
  }

  findAll(search?: string) {
    return this.prisma.teacher.findMany({
      where: search ? { nama: { contains: search, mode: 'insensitive' } } : undefined,
      include: { students: true },
    });
  }

  findOne(id: string) {
    return this.prisma.teacher.findUniqueOrThrow({ where: { id }, include: { students: true } });
  }

  update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return this.prisma.teacher.update({ where: { id }, data: updateTeacherDto });
  }

  remove(id: string) {
    return this.prisma.teacher.delete({ where: { id } });
  }
}
