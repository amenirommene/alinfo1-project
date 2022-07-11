import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'alinfo1project';
  tab : string[] = ['a','b','c'];
  tab2  = [{'id':1,'name':'ahmed'}];
  f(){
    this.title="bonjour";
     console.log("test event binding");  }
}
