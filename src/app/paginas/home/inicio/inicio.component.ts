import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { DialogServiceService } from 'src/app/servicios/general/dialog-service.service';
import { ProductoResumenComponent } from '../../productos/producto-resumen/producto-resumen.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaProductos: Array<Producto>
  contexto: string

  constructor(private dialogService: DialogServiceService) {

    this.contexto = 'assets/images/'
    this.listaProductos = new Array<Producto>()
    this.llenarProductos()

  }

  llenarProductos() {

    var producto: Producto = new Producto()
    var indiceColor = 1
    for (var i = 1; i <= 8; i++) {
      producto = new Producto()
      producto.nombre = 'Producto ' + i
      producto.url = this.contexto + 'producto' + i + '.png'
      producto.color = '' + indiceColor
      producto.descripcion = 'Aliquam erat volutpat. Ut wisi enim ad minim'
        + 'veniam, quis nostrud exerci tation ullamcorper'
        + 'suscipit lobortis nisl ut aliquip ex ea commodo'
        + 'consequat. Duis autem vel eum iriure dolor in'
        + 'hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu'

      if (i == 0) {
        producto.precio = '1.00'
      } else {
        producto.precio = i + '0.00'
      }
      this.listaProductos.push(producto)
      if (i == 4 || i == 8) {
        indiceColor = 1
      } else {
        indiceColor++
      }
    }

  }


  ver(producto: Producto) {

    var parametroUno: any
    parametroUno = producto
    this.dialogService.navigateWhitParameters('consulta-producto', parametroUno)

  }
  ngOnInit(): void {
  }



}
