import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  public size = window.innerWidth;



  public size1 = false;
  
  public size2 = false;
  
  

  ngOnInit() {
      if(this.size < 1024){   
        this.size1 = true
        this.size2 = false
      }else{
        this.size2 = true
        this.size1 = false;
        }
  }

  
  
  

  

}
