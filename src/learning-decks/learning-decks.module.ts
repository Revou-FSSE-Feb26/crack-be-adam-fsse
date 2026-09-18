import { Module } from '@nestjs/common';
import { LearningDecksService } from './learning-decks.service';
import { LearningDecksController } from './learning-decks.controller';
import { RolesGuard } from '../auth/roles.guard';

@Module({
  controllers: [LearningDecksController],
  providers: [LearningDecksService, RolesGuard],
})
export class LearningDecksModule {}
