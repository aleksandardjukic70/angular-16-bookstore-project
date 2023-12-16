//ng g c products-header
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html' ,
  })
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();  // EMITER ZA onColumnsUpdated, OVO ŠALJE PODATKE IZ CILJANE KOMPONENTE U PARENT KOMPONENTU
  @Output() itemsCountChange = new EventEmitter<number>(); 
  @Output() sortChange = new EventEmitter<string>(); 

  sort = ''; // FUNKCIJA ZA DUGME sortByMenu
  itemsShowCount = 10; // FUNKCIJA ZA DUGME changeNumberOfItemsMenu
  onSortUpdated(newSort: string): void { //METOD ZA DUGME "sortByMenu", NE VRAĆA NIŠTA SAMO AŽURIRA VREDNOST
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number): void { //METOD ZA DUGME "changeNumberOfItemsMenu", NE VRAĆA NIŠTA SAMO AŽURIRA VREDNOST
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNumber: number): void {
    this.columnsCountChange.emit(colsNumber);
  }
}
