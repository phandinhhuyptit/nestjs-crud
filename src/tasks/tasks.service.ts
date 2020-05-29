import { Injectable } from '@nestjs/common'
import { Task, TaskStatus } from './task.model'
import { v1 as uuidv1 } from 'uuid';

@Injectable()
export class TasksService {
   private tasks : Task[] = [];
   
   getAllTasks() {
     return this.tasks;
   }

   getTask(id : string) {
     return this.tasks.find( task  => task.id === id)
   }

   createTask(title: string, description: string) : Task {
     const task: Task = {
        id : uuidv1(),     
        title: title,
        description: description,
        status : TaskStatus.OPEN           
     }
     return task
   }
    
} 