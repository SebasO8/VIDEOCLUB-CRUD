import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-mmodal',
  templateUrl: './mmodal.component.html',
  styleUrls: ['./mmodal.component.scss']
})
export class MmodalComponent implements OnInit{

  public innerWidth: any;


  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(){
    
 }

  onResize(event: ResizedEvent) {
    this.innerWidth = window.innerWidth;
    // console.log(innerWidth)
  }

  public size =true;

  screenSize(){
    if(this.innerWidth < 1024){
      this.size = false;
    }else{
      this.size =true
    }
  }
 

  public show = false;

  showModal(){
    this.show = true;
    this.document.body.classList.add('test');
  }

  hideModal(){
    this.show = false;
    this.document.body.classList.remove('test');
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

