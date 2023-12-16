import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//OVDE SE IMPORTUJU KOMPONENTE NAŠE APLIKACIJE
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component'; // src/app/components/header
import { HomeComponent } from './pages/home/home.component';
import { ProductsHeaderComponent } from './pages/home/products-header/products-header.component';
import { FiltersComponent } from './pages/home/filters/filters.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component'; // src/app/pages/home 
import { ProductsService } from './api/products.service';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './api/cart.service';

//OVDE IMPORTUJEMO SVE ANGULAR MATERIAL MODULE I KOMPONENTE(header, home) KOJE CEMO KORISTITI U OKVIRU NASE APLIKACIJE
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // MODUL ZA API(JSON-SERVER)
    BrowserAnimationsModule,
    MatSidenavModule,  //SIDE NAV ZA FILTERE I KATEGORIJE
    MatGridListModule, //MODUL ZA GRID
    MatMenuModule, //MODUL ZA MENIJE
    MatButtonModule, //MODUL ZA DUGMAD
    MatCardModule, //MODUL ZA KARTICE PROIZVODA
    MatIconModule, //MODUL ZA IKONICE
    MatExpansionModule, //MODUL KOJI SE RAZVLACI(ZA FILTERE U SIDE NAVU)
    MatListModule, //MODUL ZA SIDEBAR
    MatToolbarModule, //ZA HEADER(KORISTICE GA KOMPONENTE U TOOLBARU)
    MatTableModule, //MODUL TABELE ZA KORPU
    MatBadgeModule, //MODUL ZA BEDŽEVE KOJI ĆE PRIKAZIVATI BROJ PROIZVODA U KORPI
    MatSnackBarModule, //MODUL ZA PRIKAZIVANJE INFORMACIJA KORISNICIMA(CRUD ZA KART NPR.)
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
