import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/templates/article/article.component';
import { TextAreaComponent } from './components/templates/text-area/text-area.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,ArticleComponent,TextAreaComponent],
  template:`
  <app-header/>
  <app-article/>  
  <app-text-area/>
  
   `,
})
export class AppComponent {
  
  title = 'Dance';
}
