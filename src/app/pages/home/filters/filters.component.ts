import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>()
  categories = ['Beletristika', 'Naučna fantastika'];

  onShowCategory(category: string): void { // METOD ZA FUNKCIJU "onShowCategory"
    this.showCategory.emit(category);
  }
}
