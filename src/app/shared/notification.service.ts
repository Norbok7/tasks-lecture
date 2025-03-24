import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
//create a signal to hold the current message
//it can be a string(the message to display) or null(no message)
  private _message = signal<string | null>(null)

  //expose a read only version of the signal so components can subscribe to it
  //but can't directly modify the message
  readonly message = this._message.asReadonly();

  show(msg: string) {
    this._message.set(msg); //set the message

    //clear the message after 3.5 seconds to hide the notification
    setTimeout(() => this._message.set(null), 3500);
  }
}
