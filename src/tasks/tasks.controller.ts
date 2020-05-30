import { Controller, Get, Post,Patch, Body, Param } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { Task, TaskStatus } from './task.model'
import { CreateTask  } from './validation/task.model'


@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService){}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks(); 
  }

  @Get('/:id')
  getTask(@Param('id') id: string ): Task {
    return this.tasksService.getTask(id); 
  }

  @Post()
  createTask (
    @Body() createTask : CreateTask,
    ): Task {
    return this.tasksService.createTask(createTask)
  } 
  
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ){
    return this.tasksService.updateStatusTask(id,status)
  } 

}
