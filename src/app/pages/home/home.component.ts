import { Component, OnInit } from '@angular/core';
import database_jogos from "../../../assets/data/base-dados-jogos.json"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	jogos: any[] = []

  constructor() { }

  ngOnInit(): void {
		if(database_jogos){
      this.jogos = database_jogos.jogos;
    }
  }

}
