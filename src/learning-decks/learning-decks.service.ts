import { Injectable, Optional } from '@nestjs/common';
import { CreateLearningDeckDto } from './dto/create-learning-deck.dto';
import { UpdateLearningDeckDto } from './dto/update-learning-deck.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LearningDecksService {
  constructor(@Optional() private readonly prisma: PrismaService) {}

  create(createLearningDeckDto: CreateLearningDeckDto) {
    return this.prisma.learningDeck.create({ data: createLearningDeckDto });
  }

  findAll(search?: string) {
    return this.prisma.learningDeck.findMany({ where: search ? { pertemuan: { contains: search, mode: 'insensitive' } } : undefined });
  }

  findOne(id: string) {
    return this.prisma.learningDeck.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, updateLearningDeckDto: UpdateLearningDeckDto) {
    return this.prisma.learningDeck.update({ where: { id }, data: updateLearningDeckDto });
  }

  remove(id: string) {
    return this.prisma.learningDeck.delete({ where: { id } });
  }
}
