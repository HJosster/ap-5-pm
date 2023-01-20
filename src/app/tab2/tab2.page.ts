import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {ApiService} from "../services/api/api.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private apiService: ApiService) {}
  user$: Observable<User>[] = [];

  UserIdInput : string = '';

  onEnter(){
    this.user$.push(this.apiService.getUserById(this.UserIdInput));
    this.UserIdInput = '';
  }

  openDetail(){

  }
}
