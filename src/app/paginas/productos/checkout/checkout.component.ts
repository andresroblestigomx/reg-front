import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Producto } from 'src/app/modelos/producto';
import { GlobalService } from 'src/app/servicios/global/global.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  listaProductos: Array<Producto>
  total: number
  subtotal: number
  vistaTotales: boolean
  constructor(private persistenceService: PersistenceService, private globalService: GlobalService) {


    this.vistaTotales = true
    this.listaProductos = this.persistenceService.get('listaProductos', StorageType.LOCAL)
    console.log('Productos ', this.listaProductos)
    if(this.listaProductos != undefined){
      this.calcularTotal()
    }

  }

  calcularTotal() {

    this.total = 0
    this.subtotal = 0

    if (this.listaProductos.length > 0) {
      this.listaProductos.forEach(element => {

        this.total = this.total + Number.parseInt(element.precio)
        this.subtotal = this.subtotal + Number.parseInt(element.precio)

      })
    }

  }
  borrar() {

    this.listaProductos = new Array<Producto>()
    this.persistenceService.remove('listaProductos', StorageType.LOCAL)
    this.globalService.quitarProductosTotales()
    this.vistaTotales = false
    this.calcularTotal()

  }

  ngOnInit(): void {
  }

}
