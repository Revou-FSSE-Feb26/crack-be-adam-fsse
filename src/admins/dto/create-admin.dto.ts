import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateAdminDto {
	@IsString() @IsNotEmpty() nama: string;
	@IsEmail() email: string;
	@IsString() @IsNotEmpty() noWa: string;
	@IsOptional() @IsString() poto?: string;
}
