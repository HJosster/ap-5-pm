import { Component, OnInit } from '@angular/core';
import {IDetail} from "../../models/item.model";
import {ItemsService} from "../../services/items/items.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item!: IDetail;
  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.item = this.itemsService.detail;
  }

  // Pokud predmet jeste nebyl vydan, vypise jiny text
  isUpcoming(upcoming : boolean) : string{
    if(upcoming){
      return "This item has not been released yet!";
    }else{
      return "This item is already released!";
    }
  }

  // Pokud je cena 0, nastavi ji jako jeste neoznamenou
  printCost(cost : number) : string{
    if (cost != 0) {
      return `Cost: ${cost} VBucks`;
    } else {
      return "No cost yet announced.";
    }
  }

}
