import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LearningDecksService } from './learning-decks.service';
import { CreateLearningDeckDto } from './dto/create-learning-deck.dto';
import { UpdateLearningDeckDto } from './dto/update-learning-deck.dto';

@Controller('learning-decks')
export class LearningDecksController {
  constructor(private readonly learningDecksService: LearningDecksService) {}

  @Post()
  create(@Body() createLearningDeckDto: CreateLearningDeckDto) {
    return this.learningDecksService.create(createLearningDeckDto);
  }

  @Get()
  findAll() {
    return this.learningDecksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learningDecksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLearningDeckDto: UpdateLearningDeckDto) {
    return this.learningDecksService.update(+id, updateLearningDeckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learningDecksService.remove(+id);
  }
}
