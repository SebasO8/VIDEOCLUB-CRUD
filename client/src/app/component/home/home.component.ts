import { Component, OnInit } from '@angular/core';
import {MovieService, Movie} from '../../services/movie.service';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListMovie: Movie[] = [];
  constructor( private MovieService: MovieService) { }

  // constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.listMovie();
  }

  // getAllData(){
  //   this.service.getMOvies().subscribe((res)=>{
  //     console.log(res,'res==>');
  //     this.readData=res;
      
  //   });

  // };

  listMovie()
  {
    this.MovieService.getMovies().subscribe(
      res => {
        
        this.ListMovie = <any>res;
        
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
