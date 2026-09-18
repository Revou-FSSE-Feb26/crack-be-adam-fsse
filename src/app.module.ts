import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { AdminsModule } from './admins/admins.module';
import { LearningDecksModule } from './learning-decks/learning-decks.module';
import { TugasModule } from './tugas/tugas.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule, TeachersModule, StudentsModule, AdminsModule, LearningDecksModule, TugasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
