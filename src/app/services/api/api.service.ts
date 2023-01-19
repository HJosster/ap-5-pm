import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from "../../models/item.model";
import {Observable} from "rxjs";

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

}
