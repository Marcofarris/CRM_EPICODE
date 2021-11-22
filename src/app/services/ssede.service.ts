import { Ccomune } from './../classes/ccomune';
import { Cprovincia } from './../classes/cprovincia';
import { Icomune } from './../interfaces/icomune';
import { Iprovincia } from './../interfaces/iprovincia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SsedeService {

  constructor(private http: HttpClient) { }

  getAllProvince(){
    return this.http.get<Iprovincia>(environment.urlAPI + '/api/province?page=0&size=200&sort=id,ASC');
  }

  getAllComuni(){
    return this.http.get<Icomune>(environment.urlAPI + '/api/comuni?page=0&size=200&sort=id,ASC');
  }

  addProvinciaOperativa(item: Cprovincia){
    return this.http.post(environment.urlAPI + '/api/province', item);
  }

  addComuneOperativo(item: Ccomune){
    return this.http.post(environment.urlAPI + '/api/comuni', item);
  }

  addProvinciaLegale(item: Cprovincia){
    return this.http.post(environment.urlAPI + '/api/province', item);
  }

  addComuneLegale(item: Ccomune){
    return this.http.post(environment.urlAPI + '/api/comuni', item);
  }
}
