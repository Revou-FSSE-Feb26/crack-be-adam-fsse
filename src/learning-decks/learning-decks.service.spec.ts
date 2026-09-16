import { Test, TestingModule } from '@nestjs/testing';
import { LearningDecksService } from './learning-decks.service';

describe('LearningDecksService', () => {
  let service: LearningDecksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningDecksService],
    }).compile();

    service = module.get<LearningDecksService>(LearningDecksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
