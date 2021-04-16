import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  movies: any[]=[
  {
      id:1,
      name: "Movie 1",
      description:"lorem ispum",
      img:"assets/img/movie1.jpg"
  },
  {
    id:2,
    name: "Movie 2",
    description:"lorem ispum",
    img:"assets/img/movie2.jpg"
},
{
  id:3,
  name: "Movie 3",
  description:"lorem ispum",
  img:"assets/img/movie3.jpg"
}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  handleAddMovie(movie: any){
    this.movies.push(movie)
  }
  deleteMovie(movieid:number){
    this.movies = this.movies.filter((item)=>item.id!==movieid)
  }
}
