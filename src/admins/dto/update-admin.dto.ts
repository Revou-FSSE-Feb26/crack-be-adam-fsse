import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto {
	nama?: CreateAdminDto['nama']; email?: CreateAdminDto['email']; noWa?: CreateAdminDto['noWa']; poto?: CreateAdminDto['poto'];
}
