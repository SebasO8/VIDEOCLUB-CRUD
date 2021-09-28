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

  

  
}
