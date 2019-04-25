import { Component } from '@angular/core';
import { NewsService } from './news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  news: any[];
  constructor(private newsService: NewsService) {
  }
  ngOnInit() {
    this.news = this.newsService.getNews()
  }
}
