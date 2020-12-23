import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/home/inicio/inicio.component';
import { CheckoutComponent } from './paginas/productos/checkout/checkout.component';

import { ProductoResumenComponent } from './paginas/productos/producto-resumen/producto-resumen.component';

const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'consulta-producto', component: ProductoResumenComponent },
  { path: 'checkout', component: CheckoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
