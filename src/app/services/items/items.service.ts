import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import {IDetail, Item} from "../../models/item.model";
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  detail: IDetail = {
    name: 'Wolverine Zero',
    description: 'They call him Patch, and he’s the best there is at what he does.',
    type: 'outfit',
    series: 'marvel',
    cost: 0,
    rarity: 'epic',
    upcoming: true,
    images: {
      icon: 'https://dropin-bucket.mativecdn.com/cosmetics/br/cid_a_461_athena_commando_m_desertshadow/icon.png',
      featured: '',
      background: 'https://dropin-bucket.mativecdn.com/cosmetics/br/cid_a_461_athena_commando_m_desertshadow/icon.png',
      information: 'https://dropin-bucket.mativecdn.com/cosmetics/br/cid_a_461_athena_commando_m_desertshadow/icon.png'
    }
  };

  private privateItems: Item[] = [
    {
      lastUpdate: 0,
      lanuage: 'en',
      data: {
        itemId: '98a530af-0920-47b2-b355-9df8f33e72b0',
        lastUpdate: 1672855320,
        item: {
          name: 'Wolverine Zero',
          description: 'They call him Patch, and he’s the best there is at what he does.',
          type: 'outfit',
          series: 'marvel',
          cost: 0,
          rarity: 'epic',
          upcoming: true,
          images: {
            icon: 'https://dropin-bucket.mativecdn.com/cosmetics/br/cid_a_461_athena_commando_m_desertshadow/icon.png',
            featured: '',
            background: 'https://dropin-bucket.mativecdn.com/cosmetics/br/cid_a_461_athena_commando_m_desertshadow/icon.png',
            information: 'https://dropin-bucket.mativecdn.com/cosmetics/br/cid_a_461_athena_commando_m_desertshadow/icon.png'
          }
        }
      }
    }
  ];
  constructor(private storageService: StorageService) {
    this.storageService.getData('places').then(places => {
      if (!places) {
        places = this.privateItems;
      }
      this.privateItemSubject.next(places);
    });
  }

  private privateItemSubject = new ReplaySubject<Item[]>(1);

  get items$() {
    return this.privateItemSubject.asObservable();
  }
}
