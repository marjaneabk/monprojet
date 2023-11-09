import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-composant-selecteur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composant-selecteur.component.html',
  styleUrl: './composant-selecteur.component.css'
})
export class ComposantSelecteurComponent implements OnInit{
  constructor(public router: Router){}

  ngOnInit() :void{
  }
}

