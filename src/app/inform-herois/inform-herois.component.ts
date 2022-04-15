import { Component, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-inform-herois',
  templateUrl: './inform-herois.component.html',
  styleUrls: ['./inform-herois.component.css']
})
export class InformHeroisComponent implements OnInit {
  
  goBack(): void {
    this.router.navigateByUrl('/dashboard')
  }
  
  heroi: any;
  

  constructor( private dataService: DataService, private router: Router) { 
    const nav = this.router.getCurrentNavigation()
    this.heroi = nav?.extras.state;
    console.log(this.heroi)
  }

  ngOnInit() {
    
    
  }

}
