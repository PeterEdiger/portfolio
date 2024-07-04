import { Component } from '@angular/core';
import { Input } from '@angular/core'; 


@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
  @Input()projects:any;
}
