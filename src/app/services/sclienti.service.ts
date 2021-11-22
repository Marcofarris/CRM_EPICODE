import { Cclienti } from './../classes/cclienti';
import { Iclienti } from './../interfaces/iclienti';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SclientiService {

  urlAPI = environment.urlAPI + '/api/clienti?size=200&sort=id,DESC';
  

  constructor(private http: HttpClient) { 
   
  }

  getAllClients(){
    return this.http.get<Iclienti>(this.urlAPI);
  }

  getClient(id: number){
    return this.http.get<Cclienti>(environment.urlAPI + '/api/clienti/'+id);
  }

  modCliente(item: Cclienti){
    return this.http.put<Cclienti>(environment.urlAPI + '/api/clienti/'+item.id, item);
  }

  removeClient(item: Cclienti) {
    return this.http.delete(environment.urlAPI + '/api/clienti/'+item.id);
  }

  addClient(item: Cclienti){
    return this.http.post(environment.urlAPI + '/api/clienti', item);
  }

}
