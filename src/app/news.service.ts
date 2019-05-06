import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: any[];
  constructor(private http: HttpClient) {
    this.news = [];
    this.getCurrentNews();
  }
  getCurrentNews() {
    this.http.get("https://newsapi.org/v2/top-headlines?language=en&apiKey=0d9f464c57234f4baac7f64431d575ff").subscribe((data:any) => {
    for(let a of data.articles) {
      this.news.push(a);
    }
  })
}  
getNews() {
  return this.news;
}
}

