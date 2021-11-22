import { Cclienti } from './../classes/cclienti';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SclientiService } from '../services/sclienti.service';

@Component({
  selector: 'app-visualizza-clienti',
  templateUrl: './visualizza-clienti.component.html',
  styleUrls: ['./visualizza-clienti.component.css']
})
export class VisualizzaClientiComponent implements OnInit {

  oggetti!: Cclienti[];
  

  constructor(private clientService: SclientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(resp => this.oggetti = resp.content);
  }

  selectCliente(item: Cclienti): void {
    this.router.navigate(['home', item.id, 'dettaglio']);
}

}



/* { 
      id: 1,
        ragioneSociale: '',
        partitaIva: '',
        tipoCliente: '',
        email: '',
        pec: '',
        telefono: '',
        nomeContatto: '',
        cognomeContatto: '',
        telefonoContatto: '',
        emailContatto: '',
        indirizzoSedeOperativa: {
          id: 1,
            via: '',
            civico: '',
            cap: '',
            localita: '',
            comune: {
              id: 1,
                nome: '',
                provincia: {
                  id: 1,
                    nome: '',
                    sigla: ''
                }
            }
        },
        indirizzoSedeLegale: {
          id: 1,
            via: '',
            civico: '',
            cap: '',
            localita: '',
            comune: {
              id: 1,
                nome: '',
                provincia: {
                    id: 1,
                    nome: '',
                    sigla: ''
                }
            }
        },
        dataInserimento: '',
        dataUltimoContatto: '',
        fatturatoAnnuale: 0
    }*/