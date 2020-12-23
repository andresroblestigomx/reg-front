import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Producto } from 'src/app/modelos/producto';
import { DialogServiceService } from 'src/app/servicios/general/dialog-service.service';
import { GlobalService } from 'src/app/servicios/global/global.service';

@Component({
  selector: 'app-producto-resumen',
  templateUrl: './producto-resumen.component.html',
  styleUrls: ['./producto-resumen.component.scss']
})
export class ProductoResumenComponent implements OnInit {

  producto: Producto
  listaProductos: Array<Producto>

  constructor(private routeActive: ActivatedRoute, private dialogService: DialogServiceService, private globalService: GlobalService, private persistenceService: PersistenceService) {

    this.producto = new Producto()


    this.routeActive.queryParams.subscribe(params => {



      console.log('producto ', params)

      this.producto.descripcion = params.descripcion
      this.producto.precio = params.precio
      this.producto.nombre = params.nombre
      this.producto.url = params.url





    })

  }

  agregar(producto: Producto) {

    this.globalService.aumentarProductos()
    this.listaProductos.push(producto)
    this.persistenceService.set("listaProductos", this.listaProductos, { type: StorageType.LOCAL })

  }

  regresar() {

    this.dialogService.navigate('')

  }

  ngOnInit(): void {

    this.listaProductos = this.persistenceService.get('listaProductos', StorageType.LOCAL)
    if (this.listaProductos == undefined) {
      this.listaProductos = new Array<Producto>()
    }
  }

}
