import { Injectable, Optional } from '@nestjs/common';
import { CreateTugasDto } from './dto/create-tugas.dto';
import { UpdateTugasDto } from './dto/update-tugas.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TugasService {
  constructor(@Optional() private readonly prisma: PrismaService) {}

  create(createTugasDto: CreateTugasDto) {
    return this.prisma.tugas.create({ data: createTugasDto });
  }

  findAll(status?: 'SUBMITTED' | 'GRADED' | 'RESUBMIT') {
    return this.prisma.tugas.findMany({ where: status ? { status } : undefined, include: { student: true } });
  }

  findOne(id: string) {
    return this.prisma.tugas.findUniqueOrThrow({ where: { id }, include: { student: true } });
  }

  update(id: string, updateTugasDto: UpdateTugasDto) {
    return this.prisma.tugas.update({ where: { id }, data: updateTugasDto });
  }

  remove(id: string) {
    return this.prisma.tugas.delete({ where: { id } });
  }
}
