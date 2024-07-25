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

/**
 * Switches the application language using the translation service.
 * @param {string} language - The language code to switch to (e.g., 'en' for English, 'fr' for French).
 */
  switchLanguage(language: string){
    this.translate.use(language)
  }


  
/**
 * Toggles the visibility of a menu and updates the document's overflow style accordingly.
 * When the menu is visible, it disables scrolling on the body. When hidden, it re-enables scrolling.
 */
  showMenu() {
    if (this.visibility) {
      document.body.style.overflow = 'hidden';
      this.visibility = false;
    }
    else {
      document.body.style.overflow = '';
      this.visibility = true;
    }
  }


  isMenuOpen = false;

  toggleMenu() {
    this.showMenu()
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
