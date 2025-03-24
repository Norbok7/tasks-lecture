import { Component, Inject } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-task-list',
  imports: [SharedModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  // method to get tasks
  get tasks() {
    return this.taskService.tasks();
  }

  // method for deleting task
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  // method to complete task
  completeTask(id: number) {
    this.taskService.completeTask(id);
  }
}
