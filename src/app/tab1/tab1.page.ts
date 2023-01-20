import {Component} from '@angular/core';
import { ApiService } from '../services/api/api.service';
import {IDetail, Item} from "../models/item.model";
import {Observable} from "rxjs";
import {ItemsService} from "../services/items/items.service";
import {ModalController} from "@ionic/angular";
import {SettingsPage} from "../settings/settings/settings.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private apiService: ApiService,
              private itemsService: ItemsService,
              private modalCtrl: ModalController,) {
    this.initItems();
  }

  itemSet$: Observable<Item>[] = [];

  openDetail(itemDetail: IDetail) {
    this.itemsService.detail = itemDetail;
  }

  openSettings(){
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });
    await modal.present();

    await modal.onWillDismiss();
    this.initItems();
  }

  private initItems(){
    this.itemsService.items$.subscribe(items => {
      this.itemSet$ = [];
      items.forEach(item => {
        if (item.homepage) {
          this.itemSet$.push(this.apiService.getItemById(item.itemId));
        }
      });
    });
  }

}
