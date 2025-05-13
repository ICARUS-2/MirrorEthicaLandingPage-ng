import { Component, OnInit } from '@angular/core';
import { BlogItemComponent } from "../blog-item/blog-item.component";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import BlogDataModel from '../../models/BlogDataModel';

@Component({
  selector: 'app-blog',
  imports: [BlogItemComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
    blogDataArr: Array<BlogDataModel> = [];

    constructor(private httpClient: HttpClient)
    {

    }
  
    ngOnInit(): void
    {   
      this.httpClient.get<BlogDataModel[]>('/assets/text/blog-items.json').subscribe( d => 
      {
        console.log(d);
      })
    }

    
}
