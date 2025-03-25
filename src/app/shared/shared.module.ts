import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatusPipe } from './task-status.pipe';
import { TaskHighlightDirective } from './task-highlight.directive';
import { NotificationComponent } from '../notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TaskStatusPipe, TaskHighlightDirective, NotificationComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [TaskStatusPipe, TaskHighlightDirective, NotificationComponent, CommonModule, FormsModule]
})
export class SharedModule { }
