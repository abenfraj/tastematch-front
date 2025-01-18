import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { Router } from '@angular/router';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FiltersComponent],
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent {
  @ViewChild('card') cardElement!: ElementRef;

  restaurants = [
    {
      name: "Fouquet's",
      rating: 4.7,
      cuisine: 'French',
      distance: '0.1',
      images: [
        '/assets/samples/fouquets.png',
        '/assets/samples/fouquets2.png',
        '/assets/samples/fouquets.png',
        '/assets/samples/fouquets2.png',
      ],
    },
    {
      name: 'Le Meurice',
      rating: 4.7,
      cuisine: 'French',
      distance: '0.1',
      images: [
        '/assets/samples/fouquets.png',
        '/assets/samples/fouquets2.png',
        '/assets/samples/fouquets.png',
        '/assets/samples/fouquets2.png',
      ],
    },
    {
      name: 'Le Meurice2',
      rating: 4.7,
      cuisine: 'French',
      distance: '0.1',
      images: [
        '/assets/samples/fouquets.png',
        '/assets/samples/fouquets2.png',
        '/assets/samples/fouquets.png',
        '/assets/samples/fouquets2.png',
      ],
    },
    {
      name: 'Le Meurice3',
      rating: 4.7,
      cuisine: 'French',
      distance: '0.1',
      images: [
        '/assets/samples/fouquets.png',
        '/assets/samples/fouquets2.png',
        '/assets/samples/fouquets.png',
        '/assets/samples/fouquets2.png',
      ],
    },
  ];

  currentRestaurantIndex = 0;
  currentImageIndex = 0;

  // Variables pour le swipe
  private startX = 0;
  private startY = 0;
  private currentX = 0;
  private currentY = 0;
  private startTime = 0;
  private longPressTimer: any;
  isDragging = false;
  isSwipeEnabled = false;
  cardTransform = '';

  // Ajout d'une variable pour tracker si on est dans la zone de navigation
  private isInNavigationArea = false;

  // Ajouter un tableau pour garder l'historique
  private history: number[] = [];

  isLikeHighlighted = false;
  isDislikeHighlighted = false;
  showLikeText = false;
  showDislikeText = false;

  // Ajouter la propriété isAnimating
  private isAnimating = false;

  showFilters = false;

  get currentRestaurant() {
    return this.restaurants[this.currentRestaurantIndex];
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.startTime = Date.now();

    // Démarrer le timer pour le long press (100ms au lieu de 1000ms)
    this.longPressTimer = setTimeout(() => {
      this.isSwipeEnabled = true;
    }, 100);
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isSwipeEnabled) {
      clearTimeout(this.longPressTimer);
      return;
    }

    this.currentX = event.touches[0].clientX;
    const deltaX = this.currentX - this.startX;
    this.updateCardPosition(deltaX);
    this.updateSwipeState(deltaX);
    this.isDragging = true;
  }

  onTouchEnd(event: TouchEvent) {
    clearTimeout(this.longPressTimer);

    if (!this.isSwipeEnabled) {
      // C'était un clic rapide
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = event.changedTouches[0].clientX - rect.left;

      if (x < rect.width * 0.3 && this.currentImageIndex > 0) {
        this.previousImage();
      } else if (
        x > rect.width * 0.7 &&
        this.currentImageIndex < this.currentRestaurant.images.length - 1
      ) {
        this.nextImage();
      }
    } else if (this.isDragging) {
      // C'était un swipe
      const deltaX = this.currentX - this.startX;
      this.handleSwipeEnd(deltaX);
    }

    this.resetState();
  }

  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    this.startTime = Date.now();

    // Démarrer le timer pour le long press (100ms au lieu de 1000ms)
    this.longPressTimer = setTimeout(() => {
      this.isSwipeEnabled = true;
    }, 100);
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isSwipeEnabled) {
      clearTimeout(this.longPressTimer);
      return;
    }

    this.currentX = event.clientX;
    const deltaX = this.currentX - this.startX;
    this.updateCardPosition(deltaX);
    this.updateSwipeState(deltaX);
    this.isDragging = true;
  }

  onMouseUp(event: MouseEvent) {
    clearTimeout(this.longPressTimer);

    if (!this.isSwipeEnabled) {
      // C'était un clic rapide
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;

      if (x < rect.width * 0.3 && this.currentImageIndex > 0) {
        this.previousImage();
      } else if (
        x > rect.width * 0.7 &&
        this.currentImageIndex < this.currentRestaurant.images.length - 1
      ) {
        this.nextImage();
      }
    } else if (this.isDragging) {
      // C'était un swipe
      const deltaX = this.currentX - this.startX;
      this.handleSwipeEnd(deltaX);
    }

    this.resetState();
  }

  private updateCardPosition(deltaX: number) {
    if (this.isAnimating) return;
    const rotation = deltaX * 0.1; // Ajoute une légère rotation
    this.cardTransform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
  }

  private handleSwipeEnd(deltaX: number) {
    if (this.isAnimating) return;

    const threshold = window.innerWidth * 0.3;
    if (Math.abs(deltaX) >= threshold) {
      if (deltaX > 0) {
        this.like();
      } else {
        this.dislike();
      }
    } else {
      this.resetCard();
    }
  }

  private resetCard() {
    this.cardTransform = 'translateX(0) rotate(0deg)';
    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
  }

  like() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.isLikeHighlighted = true;
    this.showLikeText = true;

    const endX = window.innerWidth;
    this.cardTransform = `translateX(${endX}px) rotate(20deg)`;

    setTimeout(() => {
      this.isLikeHighlighted = false;
      this.showLikeText = false;
      this.history.push(this.currentRestaurantIndex);
      this.currentRestaurantIndex =
        (this.currentRestaurantIndex + 1) % this.restaurants.length;
      this.currentImageIndex = 0;
      this.resetCard();
      this.resetState();
      this.cd.detectChanges();
    }, 300);
  }

  dislike() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.isDislikeHighlighted = true;
    this.showDislikeText = true;

    const endX = -window.innerWidth;
    this.cardTransform = `translateX(${endX}px) rotate(-20deg)`;

    setTimeout(() => {
      this.isDislikeHighlighted = false;
      this.showDislikeText = false;
      this.history.push(this.currentRestaurantIndex);
      this.currentRestaurantIndex =
        (this.currentRestaurantIndex + 1) % this.restaurants.length;
      this.currentImageIndex = 0;
      this.resetCard();
      this.resetState();
      this.cd.detectChanges();
    }, 300);
  }

  private nextRestaurant(direction: 'left' | 'right') {
    const endX = direction === 'left' ? -window.innerWidth : window.innerWidth;
    this.cardTransform = `translateX(${endX}px) rotate(${
      direction === 'left' ? -20 : 20
    }deg)`;

    setTimeout(() => {
      this.history.push(this.currentRestaurantIndex);
      this.currentRestaurantIndex =
        (this.currentRestaurantIndex + 1) % this.restaurants.length;
      this.currentImageIndex = 0;
      this.resetCard();
      this.resetState();
      this.isAnimating = false;
      this.cd.detectChanges();
    }, 300);
  }

  previousImage(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    const maxIndex = this.currentRestaurant.images.length - 1;
    if (this.currentImageIndex < maxIndex) {
      this.currentImageIndex++;
    }
  }

  private resetState() {
    this.isDragging = false;
    this.isSwipeEnabled = false;
    this.startX = 0;
    this.currentX = 0;
    this.showLikeText = false;
    this.showDislikeText = false;
    this.isLikeHighlighted = false;
    this.isDislikeHighlighted = false;
    this.isAnimating = false;
  }

  undo() {
    if (this.history.length === 0) return;

    // Animation de retour
    this.cardTransform = `translateX(-${window.innerWidth}px) rotate(-20deg)`;

    setTimeout(() => {
      // Récupérer le dernier index de l'historique
      this.currentRestaurantIndex = this.history.pop()!;
      this.currentImageIndex = 0;
      this.resetCard();
      this.resetState();
      this.cd.detectChanges();
    }, 300);
  }

  private updateSwipeState(deltaX: number) {
    const threshold = window.innerWidth * 0.15; // Seuil plus petit pour l'affichage du texte

    // Afficher le texte LIKE et highlight pendant le swipe vers la droite
    this.showLikeText = deltaX > threshold;
    this.isLikeHighlighted = deltaX > threshold;

    // Afficher le texte NOPE et highlight pendant le swipe vers la gauche
    this.showDislikeText = deltaX < -threshold;
    this.isDislikeHighlighted = deltaX < -threshold;
  }

  openFilters() {
    this.showFilters = true;
  }

  closeFilters() {
    this.showFilters = false;
  }

  constructor(private cd: ChangeDetectorRef, private router: Router) {}
}
