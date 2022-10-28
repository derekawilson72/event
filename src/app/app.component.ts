import { Component } from '@angular/core';
import {User} from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event';

  user: User = {
    name:'Milo',
    age: 32,
    favoriteColor:'red'
    };
  
  myName:string = "";
  displayEdit:boolean = true;

  toggleEdit() : void {

    if (this.displayEdit==true) {
      this.displayEdit = false;
    } else {
      this.displayEdit = true;
    }
  }

}
