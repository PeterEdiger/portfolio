import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  constructor(){
    for (let i = 1; i < 4; i++) {
      setTimeout(() => {
        this.arrowN = i
        console.log(this.arrowN);
      }, 4000);
    }
  }
  
  arrowN : number= 1

}
