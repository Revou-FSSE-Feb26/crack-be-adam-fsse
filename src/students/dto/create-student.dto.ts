import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateStudentDto {
	@IsString() @IsNotEmpty() nama: string;
	@IsEmail() email: string;
	@IsString() @IsNotEmpty() noWa: string;
	@IsUUID() teacherId: string;
	@IsOptional() @IsString() poto?: string;
}
