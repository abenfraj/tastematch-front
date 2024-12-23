import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-bar">
      <div class="progress-fill" [style.width.%]="progress"></div>
    </div>
  `,
  styles: [`
    .progress-bar {
      position: fixed;
      top: 24px;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgba(0, 0, 0, 0.1);
      z-index: 10;
    }

    .progress-fill {
      height: 100%;
      background: #FF9898;
      transition: width 0.3s ease;
    }
  `]
})
export class ProgressBarComponent {
  @Input() step = 1;
  
  get progress(): number {
    return (this.step / 6) * 100;
  }
} 