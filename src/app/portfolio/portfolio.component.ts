import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  rotationAngles = [0, -15, -30, -45, -60, -75, -90, -105, -120, -135];

  angle:number = 0
  rotate:string = ""
  display:string= "none"
  slideIn:boolean = false
  showBorder:string= "none"
  
  
  rotateArrow(){
    this.slideIn = true;
    this.display= "flex"    
    for (let i = 0; i < this.rotationAngles.length; i++) {
      setTimeout(() => {
        this.angle = this.rotationAngles[i]
        this.rotate = "translate(50%, -50%) rotate(" + this.angle + "deg)"
      }, i * 27);
    }
    this.angle = 0
    this.rotate = "translate(50%, -50%) rotate(" + this.angle + "deg)"
  }

  invisible(){
    this.display = "none"
  }
}
