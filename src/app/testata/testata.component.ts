import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testata',
  templateUrl: './testata.component.html',
  styleUrls: ['./testata.component.css']
})
export class TestataComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  linkCrm(){
    this.router.navigate(['home/view']);
  }

  

}
