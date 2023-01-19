import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Wrap, ItemsService} from '../../services/items/items.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  items: Wrap[] = [];

  // @ts-ignore
  form: FormGroup;


  constructor(
    private modalCtrl: ModalController,
    private itemsService: ItemsService,
    private fb: FormBuilder
  ) {
    // set places from service getter
    this.itemsService.items$.subscribe(items => {
      this.items = items;

      // create form hardcoded
      this.form = this.fb.group({
        ch1: [this.items[0].homepage, []],
        ch2: [this.items[1].homepage, []],
        ch3: [this.items[2].homepage, []],
        ch4: [this.items[3].homepage, []],
        ch5: [this.items[4].homepage, []]
      });
    });

    // @ts-ignore
      this.form.valueChanges.subscribe(data => {
      this.itemsService.setHome(0, data.ch1);
      this.itemsService.setHome(1, data.ch2);
      this.itemsService.setHome(2, data.ch3);
      this.itemsService.setHome(3, data.ch4);
      this.itemsService.setHome(4, data.ch5);
    });
  }

  ngOnInit() {
  }

  /**
   * Click event dismiss
   */
  async dismiss() {
    // dismiss modal
    await this.modalCtrl.dismiss();
  }
}
