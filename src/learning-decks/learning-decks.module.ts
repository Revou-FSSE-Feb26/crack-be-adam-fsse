import { Module } from '@nestjs/common';
import { LearningDecksService } from './learning-decks.service';
import { LearningDecksController } from './learning-decks.controller';

@Module({
  controllers: [LearningDecksController],
  providers: [LearningDecksService],
})
export class LearningDecksModule {}
