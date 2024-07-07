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
  rotationAnglesReverse = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135];

  angle: number = 0;
  rotate: string = "";
  display: string = "none";
  slideIn: boolean = false;
  showBorder: string = "none";
  grayScale: string = "grayscale(100%)";
  switch: boolean = true;
  rightToLeft: boolean = false;
  flexDirection: string = "row"

  
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
        // rotates and moves the arrow. 
        this.rotate = "translate(50%, -50%) rotate(" + this.angle + "deg)";
        this.switch = false;
        5;
      }
  }



  invisible() {
    this.display = "none";
    this.showBorder = "none";
    this.grayScale = "grayscale(100%)";
    this.switch = true;
  }



  portfolioProjects = [
    {
      "imgPath": "./assets/img/portfolio/portfolio-join.png",
      "projectName": "Join",
      "text": "Task manager inspred by the Kanban System",
      "technologies": "Angular | Typescript", 
      "count": "01/2",
    }, 
    {
      "imgPath": "./assets/img/portfolio/portfolio-join.png",
      "projectName": "Join",
      "text": "Task manager inspred by the Kanban System",
      "technologies": "Angular | Typescript", 
      "count": "01/2",
    } 
  ];
}
