import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
export class CreateTugasDto {
	@IsString() @IsNotEmpty() tugasKe: string;
	@IsString() @IsNotEmpty() pdfPath: string;
	@IsUUID() studentId: string;
}
