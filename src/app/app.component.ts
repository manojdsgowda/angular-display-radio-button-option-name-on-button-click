import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //radioItems: Array<string>;
  radioItems = ['option1', 'option2', 'option3'];
  model: string;
  clickMessage = '';

 // constructor() {
 //   this.radioItems = ['option1', 'option2', 'option3'];
 // }

      onClickMe() {
    this.clickMessage=this.model ;
  }
}
