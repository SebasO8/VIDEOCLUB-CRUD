import { Component, OnInit } from '@angular/core';
import {MovieService, Movie} from '../../services/movie.service';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private MovieService: MovieService) { }

  // constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.listMovie();
    
  }
  toggle:boolean=true
  readData:any;
  toggleActive(){
    this.toggle=!this.toggle
    console.log(this.toggle)
  }

  listMovie()
  {
    this.MovieService.getMovies().subscribe(
      res => {
       
        
        this.readData =res;
        
      },
      err => console.log(err)
    )
  }

  // delMovie(id: string)
  // {
  //   this.MovieService.deleteMovie(id).subscribe(
  //     res => {
  //       console.log('Movie delete')
  //       this.listMovie()  
  //     },
  //     err => console.log(err)
  //   )
  // }

  // editMovie(id: string)
  // {
  //   this.router.navigate(['/edit/'+id])
  //   this.MovieService.deleteMovie(id).subscribe(
  //     res => {
  //       console.log('Movie delete')
  //       this.listMovie()  
  //     },
  //     err => console.log(err)
  //   )
  // }

  

}
