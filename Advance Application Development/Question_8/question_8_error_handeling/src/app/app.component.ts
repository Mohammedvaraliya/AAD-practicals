import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'question_8_error_handeling';

  ngOnInit(){
    throw new Error("This error is meant to handled by the error handler service.")
  }

}
