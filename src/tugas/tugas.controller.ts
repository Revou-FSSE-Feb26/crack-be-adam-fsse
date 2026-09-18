import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { TugasService } from './tugas.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateTugasDto } from './dto/create-tugas.dto';
import { UpdateTugasDto } from './dto/update-tugas.dto';

@Controller('tugas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TugasController {
  constructor(private readonly tugasService: TugasService) {}

  @Post()
  create(@Body() createTugasDto: CreateTugasDto) {
    return this.tugasService.create(createTugasDto);
  }

  @Get()
  findAll(@Query('status') status?: 'SUBMITTED' | 'GRADED' | 'RESUBMIT') {
    return this.tugasService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tugasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTugasDto: UpdateTugasDto) {
    return this.tugasService.update(id, updateTugasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tugasService.remove(id);
  }
}
