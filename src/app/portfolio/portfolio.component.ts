import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  callFunction(){
    
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
