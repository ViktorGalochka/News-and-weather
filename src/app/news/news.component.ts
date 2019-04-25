import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() source;
  @Input() heading;
  @Input() description;
  @Input() url;
  @Input() urlToImage;

  constructor() { }

  ngOnInit() {
  }

}
