import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { LearningDecksService } from './learning-decks.service';
import { CreateLearningDeckDto } from './dto/create-learning-deck.dto';
import { UpdateLearningDeckDto } from './dto/update-learning-deck.dto';

@Controller('learning-decks')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LearningDecksController {
  constructor(private readonly learningDecksService: LearningDecksService) {}

  @Post()
  create(@Body() createLearningDeckDto: CreateLearningDeckDto) {
    return this.learningDecksService.create(createLearningDeckDto);
  }

  @Get()
  findAll(@Query('search') search?: string) {
    return this.learningDecksService.findAll(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learningDecksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLearningDeckDto: UpdateLearningDeckDto) {
    return this.learningDecksService.update(id, updateLearningDeckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learningDecksService.remove(id);
  }
}
