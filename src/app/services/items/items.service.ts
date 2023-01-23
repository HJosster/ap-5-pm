import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import {IDetail} from "../../models/item.model";
import {StorageService} from "../storage/storage.service";

export interface Wrap {
  itemId: string;
  name: string;
  homepage: boolean;
}

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

  private privateItems: Wrap[] = [
    {
      itemId: '6c1b2fcb-3746-443f-b598-3bfc9a258666',
      name: 'No Way Home Bundle',
      homepage: true
    },
    {
      itemId: '5fa341c8-0e31-4870-a9a1-449c3e297b2d',
      name: 'MJ (No Way Home)',
      homepage: true
    },
    {
      itemId: 'f74b5c12-c8d2-4f98-8175-9d8d84b3a7ad',
      name: 'Doctor Doom (Silver Foil)',
      homepage: true
    },
    {
      itemId: '67436f03-37fe-473c-a208-30ba4edce576',
      name: 'Ghost Glider',
      homepage: true
    },
    {
      itemId: 'd3086443-4bda-4ebb-ba7f-2fde228fd5a1',
      name: 'Psi-blade',
      homepage: true
    }
  ];

  // Nacte local storage, pokud nejaky existuje
  constructor(private storageService: StorageService) {
    this.storageService.getData('items').then(items => {
      if (!items) {
        items = this.privateItems;
      }
      this.privateItemSubject.next(items);
    });
  }

  private privateItemSubject = new ReplaySubject<Wrap[]>(1);

  get items$() {
    return this.privateItemSubject.asObservable();
  }

  // Nastavovani z settings, ktere veci se maji zobrazovat
  async setHome(index: number, active: boolean) {
    this.privateItems[index].homepage = active;
    await this.storageService.saveData('items', this.privateItems);
    this.privateItemSubject.next(this.privateItems);
  }
}
