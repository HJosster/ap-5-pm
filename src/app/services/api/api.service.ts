import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from "../../models/item.model";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  // @ts-ignore
  getItems() : Observable<Item>{
    let headers = new HttpHeaders().set('Authorization', 'string')
                                   .set('X-RapidAPI-Key', '1a8d2ef8b7msh88ed553a2f7cec5p13a88fjsn179805080440')
                                   .set('X-RapidAPI-Host', 'fortnite1.p.rapidapi.com')
                                   .set('useQueryString', 'true');
    return this.http.get<Item>('https://fortnite1.p.rapidapi.com/upcoming/get', {'headers' : headers});
  }

  getItemById(id : string) : Observable<Item>{
    let headers = new HttpHeaders().set('Authorization', 'string')
      .set('X-RapidAPI-Key', '1a8d2ef8b7msh88ed553a2f7cec5p13a88fjsn179805080440')
      .set('X-RapidAPI-Host', 'fortnite1.p.rapidapi.com')
      .set('useQueryString', 'true');
    const url = `https://fortnite1.p.rapidapi.com/item/get?id=${id}`;
    return this.http.get<Item>(url, {'headers' : headers});
  }

  getUserById(accountId : string) : Observable<User>{
    let headers = new HttpHeaders().set('Authorization', 'd1727549-11b2-4691-8f00-d60a70315397');
    const url = `https://fortnite-api.com/v2/stats/br/v2/${accountId}`
    return this.http.get<User>(url, {'headers' : headers});
  }

}
