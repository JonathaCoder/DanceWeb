import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TittleComponent } from '../tittle/tittle.component';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule,TittleComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  public src = "https://kitpro.site/danze/wp-content/uploads/sites/100/2022/07/beautiful-modern-dancer-girl-5QJA8NK.png"
  public isTrue = true

}
