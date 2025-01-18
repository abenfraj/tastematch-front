import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class FiltersComponent {
  @Output() closeFilters = new EventEmitter<void>();
  @Output() applyFilterChanges = new EventEmitter<any>();

  cuisines = ['American', 'French', 'Italian', 'Japanese'];
  diets = ['Vegetarian', 'Vegan', 'Halal', 'Carnivore'];
  priceRanges = ['€ Low price', '€€ Average price', '€€€ Expensive'];
  selectedCuisines: string[] = [];
  selectedDiets: string[] = [];
  selectedPriceRanges: string[] = [];
  zoneRange: number = 25;

  toggleSelection(item: string, array: string[]) {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
  }

  clearAll() {
    this.selectedCuisines = [];
    this.selectedDiets = [];
    this.selectedPriceRanges = [];
    this.zoneRange = 25;
  }

  close() {
    this.closeFilters.emit();
  }

  updateSliderBackground(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value);
    const percentage = (value / parseInt(input.max)) * 100;
    input.style.background = `linear-gradient(to right, #ff6b6b 0%, #ff6b6b ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
  }

  applyFilters() {
    const filters = {
      cuisines: this.selectedCuisines,
      diets: this.selectedDiets,
      priceRanges: this.selectedPriceRanges,
      zoneRange: this.zoneRange,
    };
    this.applyFilterChanges.emit(filters);
    this.close();
  }
}
