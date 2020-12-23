import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/home/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxDialogModule, IgxIconModule, IgxInputGroupModule, IgxNavbarModule } from 'igniteui-angular';
import { PersistenceModule } from 'angular-persistence';
import { HttpClientModule } from '@angular/common/http';
import { ProductoResumenComponent } from './paginas/productos/producto-resumen/producto-resumen.component';
import { CuentaComponent } from './paginas/usuario/cuenta/cuenta.component';
import { CheckoutComponent } from './paginas/productos/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductoResumenComponent,
    CuentaComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IgxNavbarModule,
    PersistenceModule,
    HttpClientModule,
    MatSidenavModule,
    MatBadgeModule,
    MatIconModule,
    IgxDialogModule,
    IgxIconModule,
    IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
