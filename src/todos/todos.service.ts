import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

    if (!createTodoDto.title) {

      throw new BadRequestException('title cannot be null');
    }

    if (!createTodoDto.activity_group_id) {

      throw new BadRequestException('activity_group_id cannot be null');
    }

    return this.todoRepository.save(createTodoDto);
  }

  async findAll(activity_group_id?: number) {

    const where = activity_group_id ? { activity_group_id } : undefined;
    return await this.todoRepository.find({ where });
  }

  async findOne(id: number) {

    const todo = await this.todoRepository.findOne({
      where: {
        id: id
      },
      withDeleted: false
    });

    if (!todo) {

      throw new NotFoundException(`Todo with ID ${id} Not Found`);
    }

    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {

    const todo = await this.findOne(id);

    const updateTodo = Object.assign(todo, updateTodoDto);

    return await this.todoRepository.save(updateTodo);
  }

  async remove(id: number) {

    await this.findOne(id);

    await this.todoRepository.softDelete(id);

    return {}
  }
}
