import { Component, OnInit } from '@angular/core';
import { BlogItemComponent } from "../blog-item/blog-item.component";
import { HttpClient } from '@angular/common/http';
import BlogDataModel from '../../models/BlogDataModel';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [BlogItemComponent, NgFor],
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
      this.httpClient.get<Object[]>('/assets/text/blog-items.json').subscribe( response => 
      {
        var mapped: BlogDataModel[] = response.map( item => 
          {
            //@ts-ignore
            return new BlogDataModel(  new Date(item.date), item.title, item.textContent );
          })
        
        mapped.sort( (a: BlogDataModel, b:BlogDataModel ) =>
        {
          return b.date.getTime() - a.date.getTime();
        } )

        this.blogDataArr = mapped;
      })
    }

    
}
