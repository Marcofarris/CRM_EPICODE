import { Cfatture } from './../classes/cfatture';
import { Router } from '@angular/router';
import { SfattureService } from './../services/sfatture.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizza-fatture',
  templateUrl: './visualizza-fatture.component.html',
  styleUrls: ['./visualizza-fatture.component.css']
})
export class VisualizzaFattureComponent implements OnInit {

  fatture!: Cfatture[];
  numero!:any;

  constructor( private fattureService: SfattureService, private router: Router) { }

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(resp => this.fatture = resp.content);
  }

  selectFattura(item: Cfatture): void {
    this.router.navigate(['home', item.id, 'dettaglioF']);
}

vai(){
  this.router.navigate(['home', this.numero, 'dettaglioF']);
}

}
