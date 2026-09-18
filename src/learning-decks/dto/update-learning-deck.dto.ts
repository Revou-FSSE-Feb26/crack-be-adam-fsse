import { CreateLearningDeckDto } from './create-learning-deck.dto';

export class UpdateLearningDeckDto {
	pertemuan?: CreateLearningDeckDto['pertemuan'];
	pdfPath?: CreateLearningDeckDto['pdfPath'];
}
