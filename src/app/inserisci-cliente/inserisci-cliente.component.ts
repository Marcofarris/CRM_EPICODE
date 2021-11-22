import { Cclienti } from './../classes/cclienti';
import { SsedeService } from './../services/ssede.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SclientiService } from './../services/sclienti.service';
import { Cprovincia } from './../classes/cprovincia';
import { Ccomune } from './../classes/ccomune';
import { Component, OnInit } from '@angular/core';
import { CaddCliente } from './../classes/cadd-cliente';

@Component({
  selector: 'app-inserisci-cliente',
  templateUrl: './inserisci-cliente.component.html',
  styleUrls: ['./inserisci-cliente.component.css']
})
export class InserisciClienteComponent implements OnInit {

  comuni!: Ccomune[];
  province!: Cprovincia[];
  nuovoComune!: Ccomune;
  nuovoComune2!: Ccomune;
  nuovaProvincia!: Cprovincia;
  nuovaProvincia2!: Cprovincia;
  oggetto!: CaddCliente;

  constructor(
    private sedeService: SsedeService,
    private clientService: SclientiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sedeService.getAllProvince().subscribe(response => this.province = response.content);
    this.sedeService.getAllComuni().subscribe(response => this.comuni = response.content);
    this.nuovoComune = new Ccomune();
    this.nuovaProvincia = new Cprovincia();
    this.nuovoComune2 = new Ccomune();
    this.nuovaProvincia2 = new Cprovincia();
    this.oggetto = new CaddCliente();
  }

  aggiungiCliente() {


    //Controllo Provincia Operativa
    this.province.forEach(element => {
      if (this.oggetto.indirizzoSedeOperativa.comune.provincia.nome == element.nome) {
        this.oggetto.indirizzoSedeOperativa.comune.provincia.id = element.id;
        this.oggetto.indirizzoSedeOperativa.comune.provincia.sigla = element.sigla;
      }
    });

    if (this.oggetto.indirizzoSedeOperativa.comune.provincia.id == 0) {
      this.nuovaProvincia.nome = this.oggetto.indirizzoSedeOperativa.comune.provincia.nome;
      this.nuovaProvincia.sigla = this.nuovaProvincia.nome.substring(0, 3);
      this.sedeService.addProvinciaOperativa(this.nuovaProvincia).subscribe(response => console.log(response));
    }

    //Controllo Provincia Legale
    this.province.forEach(element => {
      if (this.oggetto.indirizzoSedeLegale.comune.provincia.nome == element.nome) {
        this.oggetto.indirizzoSedeLegale.comune.provincia.id = element.id;
        this.oggetto.indirizzoSedeLegale.comune.provincia.sigla = element.sigla;
      }
    });
    if (this.oggetto.indirizzoSedeLegale.comune.provincia.id == 0) {
      this.nuovaProvincia2.nome = this.oggetto.indirizzoSedeLegale.comune.provincia.nome;
      this.nuovaProvincia2.sigla = this.nuovaProvincia2.nome.substring(0, 3);
      this.sedeService.addProvinciaLegale(this.nuovaProvincia2).subscribe(response => console.log(response));
    }
    this.getValueWithAsync3();
  }

  controlloComune() {
    //Controllo Comune Operativo
    this.comuni.forEach(element => {
      if (this.oggetto.indirizzoSedeOperativa.comune.nome == element.nome) {
        this.oggetto.indirizzoSedeOperativa.comune.id = element.id;
      }
    });
    if (this.oggetto.indirizzoSedeOperativa.comune.id == 0) {
      this.nuovoComune.nome = this.oggetto.indirizzoSedeOperativa.comune.nome;
      console.log(this.province)
      this.province.forEach(element => {
        if (this.oggetto.indirizzoSedeOperativa.comune.provincia.nome == element.nome) {
          this.oggetto.indirizzoSedeOperativa.comune.provincia.id = element.id;
        }
      });
      this.nuovoComune.provincia.id = this.oggetto.indirizzoSedeOperativa.comune.provincia.id;
      this.sedeService.addComuneOperativo(this.nuovoComune).subscribe(response => console.log(response));
    }

    //Controllo Comune Legale
    this.comuni.forEach(element => {
      if (this.oggetto.indirizzoSedeLegale.comune.nome == element.nome) {
        this.oggetto.indirizzoSedeLegale.comune.id = element.id;
      }
    });
    if (this.oggetto.indirizzoSedeLegale.comune.id == 0) {
      this.nuovoComune2.nome = this.oggetto.indirizzoSedeLegale.comune.nome;
      console.log(this.province)
      this.province.forEach(element => {
        if (this.oggetto.indirizzoSedeLegale.comune.provincia.nome == element.nome) {
          this.oggetto.indirizzoSedeLegale.comune.provincia.id = element.id;
        }
      });
      this.nuovoComune2.provincia.id = this.oggetto.indirizzoSedeLegale.comune.provincia.id;
      this.sedeService.addComuneLegale(this.nuovoComune2).subscribe(response => console.log(response));
    }
    this.getValueWithAsync();
  }

  chiamate() {
    this.sedeService.getAllComuni().subscribe(response => this.comuni = response.content);
    this.sedeService.getAllProvince().subscribe(response => this.province = response.content);
    this.getValueWithAsync2();
  }

  controllo() {
    if (this.oggetto.indirizzoSedeLegale.comune.id == 0) {
      this.comuni.forEach(element => {
        if (this.oggetto.indirizzoSedeLegale.comune.nome == element.nome) {
          this.oggetto.indirizzoSedeLegale.comune.id = element.id;
        }
      });
    }
    
        if (this.oggetto.indirizzoSedeOperativa.comune.id == 0) {
          this.comuni.forEach(element => {
            if (this.oggetto.indirizzoSedeOperativa.comune.nome == element.nome) {
              this.oggetto.indirizzoSedeOperativa.comune.id = element.id;
            }
          });
        }
    
        if (this.oggetto.indirizzoSedeOperativa.comune.provincia.id == 0) {
          this.province.forEach(element => {
            if (this.oggetto.indirizzoSedeOperativa.comune.provincia.nome == element.nome) {
              this.oggetto.indirizzoSedeOperativa.comune.provincia.id = element.id;
              this.oggetto.indirizzoSedeOperativa.comune.provincia.sigla = element.sigla;
            }
          });
        }

    if (this.oggetto.indirizzoSedeLegale.comune.provincia.id == 0) {
      this.province.forEach(element => {
        if (this.oggetto.indirizzoSedeLegale.comune.provincia.nome == element.nome) {
          this.oggetto.indirizzoSedeLegale.comune.provincia.id = element.id;
          this.oggetto.indirizzoSedeLegale.comune.provincia.sigla = element.sigla;
        }
      });
    }

    //Inserimento Cliente
    this.clientService.addClient(this.oggetto).subscribe(response => console.log(response));
  }

  chiamate2(){
    this.sedeService.getAllComuni().subscribe(response => this.comuni = response.content);
    this.sedeService.getAllProvince().subscribe(response => this.province = response.content);
    this.getValueWithAsync4();
  }

  resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
  }

  async getValueWithAsync() {
    const value = await this.resolveAfter2Seconds();
    this.chiamate();
  }

  async getValueWithAsync2() {
    const value = await this.resolveAfter2Seconds();
    this.controllo();
  }

  async getValueWithAsync3() {
    const value = await this.resolveAfter2Seconds();
    this.chiamate2();
  }

  async getValueWithAsync4() {
    const value = await this.resolveAfter2Seconds();
    this.controlloComune();
  }

}
