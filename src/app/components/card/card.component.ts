import { Component, OnInit } from '@angular/core';


import { Animal } from 'src/app/Animal';
import { ANIMAL } from 'src/app/mock-animal';

import { faAngry } from '@fortawesome/free-solid-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { faWandMagic } from '@fortawesome/free-solid-svg-icons';
import { faSackXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  faAngry = faAngry;
  faBatteryFull= faBatteryFull;
  faWandMagic=faWandMagic;
  faSackXmark=faSackXmark;

  
  
  animals: Animal[] = ANIMAL;

  
  
  constructor() {
    
   }

  ngOnInit(): void {
     
  }

}
