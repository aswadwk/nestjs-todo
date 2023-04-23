import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { HttpExceptionFilter } from 'src/filters/http.exception.filter';

@Controller('activity-groups')
@UseFilters(new HttpExceptionFilter())
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) { }

  @Post()
  async create(@Body() createActivityDto: CreateActivityDto) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.activitiesService.create(createActivityDto)
    };
  }

  @Get()
  async findAll() {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.activitiesService.findAll()
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.activitiesService.findOne(id)
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.activitiesService.update(+id, updateActivityDto)
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.activitiesService.remove(+id)
    };
  }
}
