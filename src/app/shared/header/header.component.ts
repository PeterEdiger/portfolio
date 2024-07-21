import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang("en");
  }

  
  visibility = true;


  switchLanguage(language: string){
    this.translate.use(language)
  }


  burgerToggle() {
    if (this.visibility) {
      document.body.style.overflow = 'hidden';
      this.visibility = false;
    }
    else {
      document.body.style.overflow = '';
      this.visibility = true;
    }
  }
}
