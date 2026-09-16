import { PartialType } from '@nestjs/mapped-types';
import { CreateLearningDeckDto } from './create-learning-deck.dto';

export class UpdateLearningDeckDto extends PartialType(CreateLearningDeckDto) {}
