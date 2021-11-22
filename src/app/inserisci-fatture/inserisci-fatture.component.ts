import { CaddFattura } from './../classes/cadd-fattura';
import { Cclienti } from './../classes/cclienti';
import { Cfatture } from './../classes/cfatture';
import { Router, ActivatedRoute } from '@angular/router';
import { SclientiService } from './../services/sclienti.service';
import { SfattureService } from './../services/sfatture.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserisci-fatture',
  templateUrl: './inserisci-fatture.component.html',
  styleUrls: ['./inserisci-fatture.component.css']
})
export class InserisciFattureComponent implements OnInit {

  oggetto!:CaddFattura;

  clienti:Cclienti[] = [];
  prova: any[] = [];
  numero!:number;

  constructor(
    private fattureService: SfattureService,
    private clientService: SclientiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.oggetto = new CaddFattura();
    this.clientService.getAllClients().subscribe(resp => this.clienti = resp.content);
  }

  aggiungiFattura() {
    //Inserimento cliente 
    this.prova.push(this.clienti);
    for (let i = 0; i < this.clienti.length; i++) {
      this.prova.forEach(element => {
        if (this.oggetto.cliente.ragioneSociale == element[i].ragioneSociale) {
          console.log(element[i].id)
          this.oggetto.cliente.id = element[i].id
        }
      });
    }


    //chiamata
    if(this.oggetto.cliente.id == 0){
      alert('Cliente non registrato')
    } else {
      this.fattureService.addFattura(this.oggetto).subscribe(response => console.log(response));
    }
    
  }

  

}
