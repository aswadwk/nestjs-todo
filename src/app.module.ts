import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesModule } from './activities/activities.module';
import { TodosModule } from './todos/todos.module';
import { typeconf } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeconf), ActivitiesModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
