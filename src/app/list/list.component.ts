import {Component, OnInit} from '@angular/core';
import {ItemModel} from '../model/item.model';
import {Router} from '@angular/router';
import {NewModel} from '../model/new.model';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  static URL = 'list';
  public news: NewModel[];

  constructor(private rout: Router, private newsService: NewsService) {

  }

  ngOnInit(): void {
    this.synchronize();
  }

  navigateToItem(item: NewModel): void {
    this.rout.navigate(['/item/' + item.id]);
  }

  synchronize(): void {
    this.newsService.getAllNews().subscribe(
      data => {
        this.news = data;
      }
    );
  }

}
