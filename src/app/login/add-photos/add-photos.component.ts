import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-add-photos',
  templateUrl: './add-photos.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./add-photos.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class AddPhotosComponent {
  photos: (string | null)[] = new Array(9).fill(null);
  minimumPhotos = 2;

  constructor(private location: Location, private router: Router) {}

  get isValid(): boolean {
    return this.photos.filter(photo => photo !== null).length >= this.minimumPhotos;
  }

  onFileSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photos[index] = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  navigateNext() {
    if (this.isValid) {
      this.router.navigate(['/next-step']);
    }
  }

  goBack() {
    this.location.back();
  }

  removeImage(index: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // Clear the image at the specified index
    // You'll need to adjust this based on how you're storing the images
    this.photos[index] = null;
    // Reset the file input if needed
    const fileInput = document.querySelector(`input[data-index="${index}"]`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
} 