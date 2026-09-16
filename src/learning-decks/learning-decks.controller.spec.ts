import { Test, TestingModule } from '@nestjs/testing';
import { LearningDecksController } from './learning-decks.controller';
import { LearningDecksService } from './learning-decks.service';

describe('LearningDecksController', () => {
  let controller: LearningDecksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningDecksController],
      providers: [LearningDecksService],
    }).compile();

    controller = module.get<LearningDecksController>(LearningDecksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
