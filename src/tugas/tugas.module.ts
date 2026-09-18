import { Module } from '@nestjs/common';
import { TugasService } from './tugas.service';
import { TugasController } from './tugas.controller';
import { RolesGuard } from '../auth/roles.guard';

@Module({
  controllers: [TugasController],
  providers: [TugasService, RolesGuard],
})
export class TugasModule {}
