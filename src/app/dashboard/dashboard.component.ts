import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi'; 
import { ListaHeroisService } from '../lista-herois.service'; 
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public heroiSelecionado!: string;

  heroiSelect(heroi:any) {
    this.heroiSelecionado = heroi.name
  }

  voltar() {
    this.heroiSelecionado = ''
  }

  list!: Heroi[];

  constructor(private service: ListaHeroisService, private router: Router, private dataService: DataService) { }

  ngOnInit() {

    this.service.list().subscribe((list:any)=>{
    this.list = list.results;
    })
  }

  goToDetalheByService(heroi:Heroi) {
    this.dataService.setHeroi(heroi);
    this.router.navigateByUrl('/inform-herois')
  }

  goToDetalhesByState(heroi:Heroi) {
    this.router.navigateByUrl('/inform-herois', {state: heroi})
  }
}