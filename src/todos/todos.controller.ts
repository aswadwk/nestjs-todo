import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseFilters } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { HttpExceptionFilter } from 'src/filters/http.exception.filter';

@Controller('todo-items')
@UseFilters(new HttpExceptionFilter())
export class TodosController {
  constructor(private readonly todosService: TodosService) { }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {

    return {
      'status': 'Success',
      'message': 'Success',
      'data': await this.todosService.create(createTodoDto)
    }
  }

  @Get()
  async findAll(@Query('activity_group_id') activity_group_id?: number) {

    return {
      'status': 'Success',
      'message': 'Success',
      'data': await this.todosService.findAll(activity_group_id)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    return {
      'status': 'Success',
      'message': 'Success',
      'data': await this.todosService.findOne(+id)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {

    return {
      'status': 'Success',
      'message': 'Success',
      'data': await this.todosService.update(+id, updateTodoDto)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    return {
      'status': 'Success',
      'message': 'Success',
      'data': await this.todosService.remove(+id)
    }
  }
}
