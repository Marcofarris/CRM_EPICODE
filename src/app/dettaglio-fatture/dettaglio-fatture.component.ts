import { Cclienti } from './../classes/cclienti';
import { Cfatture } from './../classes/cfatture';
import { Router, ActivatedRoute } from '@angular/router';
import { SclientiService } from './../services/sclienti.service';
import { SfattureService } from './../services/sfatture.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettaglio-fatture',
  templateUrl: './dettaglio-fatture.component.html',
  styleUrls: ['./dettaglio-fatture.component.css']
})
export class DettaglioFattureComponent implements OnInit {

  oggetto!:Cfatture;
  clienti:Cclienti[] = [];
  numero:number = 0;
  visualizza = true;
  constructor(private fattureService: SfattureService,
    private clientService: SclientiService,
    private router: Router, 
    private route: ActivatedRoute) { 
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.fattureService.getFattura(params.id).subscribe(response => this.oggetto = response)
      }
    })
    this.clientService.getAllClients().subscribe(resp => this.clienti = resp.content);
  }

modificaFattura(){
  //Cambio stato
  if (this.oggetto.stato.nome == 'PAGATA'){
    this.oggetto.stato.id = 1;
  } else {
    this.oggetto.stato.id = 2;
  }
  //chiamata
  this.fattureService.modFattura(this.oggetto).subscribe(response => console.log(response));
  this.router.navigate(['home/viewF']);
}

eliminaFattura(item: Cfatture){
  if(item.id! <= 20){
    alert('Questa fattura non può essere eliminata')
  } else{
    this.fattureService.removeFattura(this.oggetto).subscribe(response => console.log(response));
    this.router.navigate(['home/viewF']);
  }
}

vai(){
  this.router.navigate(['home', this.numero, 'dettaglioF']);
}

selectCliente(id?: number): void {
  this.router.navigate(['home', id, 'dettaglio']);
}

}
