import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextAreaComponent } from '../text-area/text-area.component';

@Component({
  selector: 'app-tittle',
  standalone: true,
  imports: [CommonModule,TextAreaComponent],
  templateUrl: './tittle.component.html',
  styleUrl: './tittle.component.scss'
})
export class TittleComponent {
  public isTrue = true
}
