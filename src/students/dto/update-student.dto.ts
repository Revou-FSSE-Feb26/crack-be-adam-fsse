import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto {
	nama?: CreateStudentDto['nama']; email?: CreateStudentDto['email']; noWa?: CreateStudentDto['noWa']; teacherId?: CreateStudentDto['teacherId']; poto?: CreateStudentDto['poto'];
}
