import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ANIMAL } from 'src/app/mock-animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  animalsTable: Animal[] = ANIMAL;
  animalsHangry: Animal[] = ANIMAL.filter(el=>el.hangry == true);

  animalsIsAlive: Animal[] = ANIMAL.filter(el => el.isAlive==true);
  title = 'angular-directive';
}
