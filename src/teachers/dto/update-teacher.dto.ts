import { CreateTeacherDto } from './create-teacher.dto';

export class UpdateTeacherDto {
	nama?: CreateTeacherDto['nama'];
	email?: CreateTeacherDto['email'];
	noWa?: CreateTeacherDto['noWa'];
	poto?: CreateTeacherDto['poto'];
}
