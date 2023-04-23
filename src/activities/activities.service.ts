import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivitiesService {

  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) { }

  async create(createActivityDto: CreateActivityDto) {

    if (!createActivityDto.title) {

      throw new BadRequestException('title cannot be null');
    }

    return await this.activityRepository.save(createActivityDto);
  }

  async findAll() {

    return await this.activityRepository.find();
  }

  async findOne(id: number) {

    return await this.activityRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {

    return await this.activityRepository.update(id, updateActivityDto);
  }

  async remove(id: number) {

    return await this.activityRepository.softDelete(id);
  }
}
