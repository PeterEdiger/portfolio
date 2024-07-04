import { Component } from '@angular/core';
import { Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
  @Input()projects:any;

  rotationAngles = [0, -15, -30, -45, -60, -75, -90, -105, -120, -135];

  angle: number = 0;
  rotate: string = "";
  display: string = "none";
  slideIn: boolean = false;
  showBorder: string = "none";
  grayScale: string = "grayscale(100%)";
  switch: boolean = true;


  rotateArrow() {
    if (this.switch) {
      this.grayScale = "none";
      this.slideIn = true;
      this.display = "flex";
      this.showBorder = "block";
      for (let i = 0; i < this.rotationAngles.length; i++) {
        setTimeout(() => {
          this.angle = this.rotationAngles[i];
          this.rotate = "translate(50%, -50%) rotate(" + this.angle + "deg)";
        }, i * 27);
      }
      this.angle = 0;
      this.rotate = "translate(50%, -50%) rotate(" + this.angle + "deg)";
      this.switch = false;
    }
  }


  invisible() {
    this.display = "none";
    this.showBorder = "none";
    this.grayScale = "grayscale(100%)";
    this.switch = true;
  }

}
