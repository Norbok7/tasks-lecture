import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus', //Pipe will be used as | taskStatus in templates
  standalone: false,
})
export class TaskStatusPipe implements PipeTransform {
  //create a transform method that is required in all pipes
  //it take a boolean value (completed) and return a string

  transform(completed: boolean): string {
    return completed ? 'Completed ✔️' : 'Pending ⏳';
  }

}
