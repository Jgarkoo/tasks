import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appluka';
   name: string =  'kebaba';
   email: string = 'analistisi69@gmial.com';
   age: number = 69;
}