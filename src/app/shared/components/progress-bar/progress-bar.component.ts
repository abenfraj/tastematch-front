import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-bar">
      <div class="progress-fill" [style.width]="progressWidth"></div>
    </div>
  `,
  styles: [`
    .progress-bar {
      width: 100%;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 45px;
      left: 0;
      z-index: 2;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(to right, #e48b8d, #f9ebeb);
      transition: width 0.3s ease;
    }
  `]
})
export class ProgressBarComponent {
  @Input() step = 1;
  
  get progressWidth(): string {
    if (this.step === 6) {
      return '100%';
    }
    return `${((this.step - 1) * 20)}%`;
  }
} 