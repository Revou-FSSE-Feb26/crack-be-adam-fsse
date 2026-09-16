import { Injectable } from '@nestjs/common';
import { CreateLearningDeckDto } from './dto/create-learning-deck.dto';
import { UpdateLearningDeckDto } from './dto/update-learning-deck.dto';

@Injectable()
export class LearningDecksService {
  create(createLearningDeckDto: CreateLearningDeckDto) {
    return 'This action adds a new learningDeck';
  }

  findAll() {
    return `This action returns all learningDecks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} learningDeck`;
  }

  update(id: number, updateLearningDeckDto: UpdateLearningDeckDto) {
    return `This action updates a #${id} learningDeck`;
  }

  remove(id: number) {
    return `This action removes a #${id} learningDeck`;
  }
}
