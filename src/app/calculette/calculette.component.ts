import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CompteurDeCalculComponent} from "../compteur-de-calcul/compteur-de-calcul.component";

@Component({
  selector: 'app-calculette',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CompteurDeCalculComponent],
  templateUrl: './calculette.component.html',
  styleUrl: './calculette.component.css'
})
export class CalculetteComponent {

@ViewChild('compteur') compteur!:CompteurDeCalculComponent;
  public calculatrice: FormGroup;

  public resultat: Number = 0;

  public flagTropDeCalcul : boolean=false;

  calcul():void{

    this.compteur.compte();

    this.resultat = eval(
      'this.operande1.value' +
      this.operateur.value +
      'this.operande2.value'
    )


  }
  public operande1: FormControl
    = new FormControl<Number>(0, [
      Validators.min(1),
      Validators.required
  ]);

  public operateur: FormControl
    = new FormControl<string|null>('+', Validators.required);

  public operande2: FormControl
    = new FormControl<Number>(0,[
      Validators.min(1),
      Validators.required
    ]);

  constructor() {

    this.calculatrice = new FormGroup({
      operande1: this.operande1,
      operateur: this.operateur,
      operande2: this.operande2,
    });

  }


  tropDeCalcul($event: boolean) {
    if ($event == true){
      this.flagTropDeCalcul = true;
    }
  }

}
