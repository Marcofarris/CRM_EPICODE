import { Ifatture } from './../interfaces/ifatture';
import { Cfatture } from './../classes/cfatture';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SfattureService {

  constructor(private http: HttpClient) { }

  getAllFatture(){
    return this.http.get<Ifatture>(environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,DESC');
  }

  getFattura(id:number){
    return this.http.get<Cfatture>(environment.urlAPI + '/api/fatture/'+id);
  }

  modFattura(item: Cfatture){
    return this.http.put<Cfatture>(environment.urlAPI + '/api/fatture/'+item.id, item);
  }

  removeFattura(item: Cfatture) {
    return this.http.delete(environment.urlAPI + '/api/fatture/'+item.id);
  }

  getFattureCliente(id:number){
    return this.http.get<Ifatture>(environment.urlAPI + '/api/fatture/cliente/'+id+'?page=0&size=20&sort=id,ASC');
  }

  addFattura(item: Cfatture){
    return this.http.post(environment.urlAPI + '/api/fatture', item);
  }
}
