import { Injectable, Optional } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(@Optional() private readonly prisma: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({ data: { ...createStudentDto, poto: createStudentDto.poto ?? '' } });
  }

  findAll(search?: string) {
    return this.prisma.student.findMany({ where: search ? { nama: { contains: search, mode: 'insensitive' } } : undefined, include: { teacher: true, tugas: true } });
  }

  findOne(id: string) {
    return this.prisma.student.findUniqueOrThrow({ where: { id }, include: { teacher: true, tugas: true } });
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.prisma.student.update({ where: { id }, data: updateStudentDto });
  }

  remove(id: string) {
    return this.prisma.student.delete({ where: { id } });
  }
}
