import { Component, computed, inject } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
//injectiong a service into a component
// two different ways that you might see
// constructor(private notificationService: NotificationService,) {}}
private notificationService = inject(NotificationService);

message = computed(() => this.notificationService.message())

}
