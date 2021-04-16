import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:any={}
  //eventEmitter Đối tượng giúp định nghĩa 1 event
  //onSelect là tên Event (tự định nghĩa)
  //Output: Nhận vào event vừa tạo, cung cấp các hàm để đẩy event này lên component cha
  @Output() onSelect = new EventEmitter()
  @Output() onDelete = new EventEmitter()
  constructor() { }
 
  ngOnInit(): void {
  }
  selectMovie(){
    //Cần đẩy bộ phim vừa click lên component cha (movieListComponent)
    //emit: Kích hoạt event và đẩy lên component cha
    //Có thể truyền kèm data trong hàm emit để component cha nhận dc
    this.onSelect.emit(this.movie)
  }
  deleteMovie(){
    this.onDelete.emit(this.movie.id)
  }
}
