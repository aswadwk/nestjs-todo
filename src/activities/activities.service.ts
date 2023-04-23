import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

    const activity = await this.activityRepository.findOne({
      where: {
        id: id
      },
      withDeleted: false
    });

    if (!activity) {

      throw new NotFoundException(`Activity with ID ${id} Not Found`);
    }

    return activity;
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    const activity = await this.findOne(id);

    const updateActivity = Object.assign(activity, updateActivityDto);

    return await this.activityRepository.save(updateActivity);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.activityRepository.softDelete(id);

    return {}
  }
}
