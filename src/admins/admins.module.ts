import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { RolesGuard } from '../auth/roles.guard';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService, RolesGuard],
})
export class AdminsModule {}
