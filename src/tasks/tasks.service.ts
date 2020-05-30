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

   createTask(creatTask) : Task {
     const task: Task = {
        id : uuidv1(),     
        title: creatTask.title,
        description: creatTask.description,
        status : TaskStatus.OPEN           
     }
     this.tasks.push(task)
     return task
   }

   deleteTask(id : string) : string {
     this.tasks = this.tasks.filter( task =>  task.id !== id)     
     return "Sucess"
   }

   updateStatusTask(id : string, status : TaskStatus) : Task {
    const task = this.getTask(id)
    task.status = status
    this.tasks.forEach((task,index)=>{
      if(task.id  === id){
        this.tasks[index] === task
      }
    })
    return task 
   }   
} 