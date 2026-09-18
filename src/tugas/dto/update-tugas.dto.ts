import { CreateTugasDto } from './create-tugas.dto';

export class UpdateTugasDto {
	tugasKe?: CreateTugasDto['tugasKe'];
	pdfPath?: CreateTugasDto['pdfPath'];
	studentId?: CreateTugasDto['studentId'];
	nilai?: number;
	catatan?: string;
	status?: 'SUBMITTED' | 'GRADED' | 'RESUBMIT';
}
