import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  visibility = true

  burgerToggle(){
    if(this.visibility){
      document.body.style.overflow = 'hidden';
      this.visibility = false
    }
  else{
    document.body.style.overflow = '';
    this.visibility = true
  }
}
}
