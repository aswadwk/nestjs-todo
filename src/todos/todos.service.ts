import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {

  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) { }

  async create(createTodoDto: CreateTodoDto) {

    return this.todoRepository.save(createTodoDto);
  }

  async findAll(activity_group_id?: number) {

    const where = activity_group_id ? { activity_group_id } : undefined;
    return await this.todoRepository.find({ where });
  }

  async findOne(id: number) {

    return await this.todoRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {

    return await this.todoRepository.update(id, updateTodoDto);
  }

  async remove(id: number) {

    return await this.todoRepository.softDelete(id);
  }
}
