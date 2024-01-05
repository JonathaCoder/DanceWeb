import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 public src: string = 'https://kitpro.site/danze/wp-content/uploads/sites/100/2022/07/Danze-Logo-1024x367.png'
 public menu = 'flex'
}
