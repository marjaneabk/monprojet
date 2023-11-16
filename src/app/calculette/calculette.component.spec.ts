import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ComposantRouteurComponent} from "../composant-routeur/composant-routeur.component";
import { CalculetteComponent } from './calculette.component';
import {Routes} from "@angular/router";

const routes:Routes = [
  {path: 'mon_composant', component:ComposantRouteurComponent},
  {path: 'calculette', component:ComposantRouteurComponent},
]



describe('CalculetteComponent', () => {
  let component: CalculetteComponent;
  let fixture: ComponentFixture<CalculetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


