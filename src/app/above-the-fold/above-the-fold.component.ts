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

    setInterval(() => {
        this.arrowN = this.arrowN % 6
          this.arrowN ++
      }, 350);
    }

  
    arrowN : number= 1

}
