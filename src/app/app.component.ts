import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ComposantSelecteurComponent} from "./composant-selecteur/composant-selecteur.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, ComposantSelecteurComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monprojet';
}
