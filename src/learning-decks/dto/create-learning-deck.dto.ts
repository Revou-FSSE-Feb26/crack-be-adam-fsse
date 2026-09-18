import { IsNotEmpty, IsString } from 'class-validator';
export class CreateLearningDeckDto {
	@IsString() @IsNotEmpty() pertemuan: string;
	@IsString() @IsNotEmpty() pdfPath: string;
}
