import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any
  constructor(private news: DataService) {
    this.news.getAll().subscribe(res => { 
      console.log("getall-->",res);
            this.posts = res } 
    )



  }
  ngOnInit(): void {

  }

}
