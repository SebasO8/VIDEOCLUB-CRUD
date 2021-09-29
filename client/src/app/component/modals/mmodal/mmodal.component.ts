import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mmodal',
  templateUrl: './mmodal.component.html',
  styleUrls: ['./mmodal.component.scss']
})
export class MmodalComponent {

  public show = false;

  showModal(){
    this.show = true;
  }

  hideModal(){
    this.show = false;
  }
  
  public Title = '';
  // public Number = ;

  changeTitle(value: any){
    this.Title = value
  };

  public MovieArray: (string | number)[] = [];

  Add(){
    this.MovieArray.push(this.Title)
    let element: any = document.getElementById('title')
    element.value = ''
    console.log(this.MovieArray)
  }
  

  

  
}
