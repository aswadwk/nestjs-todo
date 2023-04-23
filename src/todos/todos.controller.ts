import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo-items')
export class TodosController {
  constructor(private readonly todosService: TodosService) { }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.todosService.create(createTodoDto)
    }
  }

  @Get()
  async findAll(@Query('activity_group_id') activity_group_id?: number) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.todosService.findAll(activity_group_id)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.todosService.findOne(+id)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.todosService.update(+id, updateTodoDto)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    return {
      'status': 'success',
      'message': 'success',
      'data': await this.todosService.remove(+id)
    }
  }
}
