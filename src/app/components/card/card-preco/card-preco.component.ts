import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  templateUrl: './card-preco.component.html',
  styleUrls: ['./card-preco.component.css']
})
export class CardPrecoComponent implements OnInit {
// deixando dinameico
@Input()
titulo:string="Play it Now"
@Input()
gameType:string=""
@Input()
gamePrice:string="R$ 129,99"

  constructor() { }

  ngOnInit(): void {
  }

}
