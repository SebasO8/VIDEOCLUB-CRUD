import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD MOVIES';
  idPrueba = document.getElementsByTagName("body")
  segundaPrueba = 32
  
  mostar(){
    console.log(this.segundaPrueba)
  }


}
