import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'portfolio';
  isImprintRoute: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.isImprintRoute = (event as NavigationEnd).urlAfterRedirects === '/imprint' || (event as NavigationEnd).urlAfterRedirects === '/privacy-policy'
        
        
        const navigationEndEvent = event as NavigationEnd;
        if (!navigationEndEvent.urlAfterRedirects.includes('#')) {
          window.scrollTo(0, 0);
        }
      });
  }
}
