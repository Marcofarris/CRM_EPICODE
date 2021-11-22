import { Cfatture } from './../classes/cfatture';
import { SfattureService } from './../services/sfatture.service';
import { Cclienti } from './../classes/cclienti';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SclientiService } from '../services/sclienti.service';

@Component({
  selector: 'app-dettaglio-clienti',
  templateUrl: './dettaglio-clienti.component.html',
  styleUrls: ['./dettaglio-clienti.component.css']
})
export class DettaglioClientiComponent implements OnInit {
  numero!:number;
  legale = false;
  operativa = false;
  fatt = false;
  visualizza = true;
  oggetto!:Cclienti;
  fatture!:Cfatture[];

  constructor( private fattureService: SfattureService,
    private clientService: SclientiService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.clientService.getClient(params.id).subscribe(response => this.oggetto = response)
        this.fattureService.getFattureCliente(params.id).subscribe(response => this.fatture = response.content)
      }
    });

  }

  modificaCliente(){
    this.clientService.modCliente(this.oggetto).subscribe(response => console.log(response));
    this.router.navigate(['home/view']);
  }

  eliminaCliente(item: Cclienti){
    if(item.id! <= 100){
      alert('Questo utente non può essere eliminato')
    } else{
      this.clientService.removeClient(this.oggetto).subscribe(response => console.log(response));
      alert('Cliente eliminato')
      this.router.navigate(['home/view']);
    }
  }

  visualizzaLegale(): void{
    this.operativa = false;
    this.fatt = false;
    this.legale = true;
  }

  visualizzaOperativa(): void{
    this.legale = false;
    this.fatt = false;
    this.operativa = true;
  }

  vai(){
    this.router.navigate(['home', this.numero, 'dettaglio']);
    this.fatt = false;
  }

  visualizzaFatture(){
    this.legale = false;
    this.operativa= false;
    this.fatt = true;
  }

  vediFattura(numeroF: any){
    this.router.navigate(['home', numeroF, 'dettaglioF']);
  }
}
