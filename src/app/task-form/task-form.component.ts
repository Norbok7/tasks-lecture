import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TaskService } from '../shared/task.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-task-form',
  imports: [SharedModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  constructor(private taskService: TaskService, private notify: NotificationService) {}

  // Properties
  newTaskTitle = '';

  // get the signal taskCount from service
  get taskCount() {
    return this.taskService.taskCount();
  }

  // get the signal taskCountCompleted from service
  get taskCountCompleted() {
    return this.taskService.taskCountCompleted();
  }

  // Methods
  addTask() {
    if (this.newTaskTitle) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
    this.notify.show('➕ Task Added!')
  }
}
