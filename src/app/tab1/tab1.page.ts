import {Component} from '@angular/core';
import { ApiService } from '../services/api/api.service';
import {IDetail, Item} from "../models/item.model";
import {Observable} from "rxjs";
import {ItemsService} from "../services/items/items.service";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private apiService: ApiService,
              private itemsService: ItemsService) {
    this.initItems()
  }

  itemSet$: Observable<Item>[] = [];

  getApiInfo(){
    this.itemSet$.push(this.apiService.getItemById('98a530af-0920-47b2-b355-9df8f33e72b0'));
  }
//this.item$ = this.apiService.getItemById('98a530af-0920-47b2-b355-9df8f33e72b0');
  openDetail(itemDetail: IDetail) {
    this.itemsService.detail = itemDetail;
  }

  private initItems(){
    this.itemsService.items$.subscribe(items => {
      this.itemSet$ = [];
      items.forEach(item => {
        if (item.data) {
          this.itemSet$.push(this.apiService.getItemById(item.data.itemId));
        }
      });
    });
  }

}
