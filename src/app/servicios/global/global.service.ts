import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Clientes } from 'src/app/modelos/clientes';
import { PersistenceService, StorageType } from 'angular-persistence';
import { CuentaService } from '../login/cuenta.service';
import { Producto } from 'src/app/modelos/producto';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isSidebarVisible: boolean;

  bikerStoreFiltro: boolean

  pacrheStoreFiltro: boolean

  badgeDescuento: number

  badgesProductos: number

  badgesProductosWish: number

  listaProductos: Array<Producto>

  listaProductosWish: Array<Producto>

  sidebarVisibilityChange: boolean

  subtotal: number

  username: Clientes

  rolVentas: boolean
  idFiltro: number
  home: boolean
  nosotros: boolean
  innovacion: boolean
  biker: boolean
  personaliza: boolean
  parche: boolean
  promociones: boolean
  cantidadMayor: boolean
  parcheAsignado: Array<Producto>



  constructor(private peristenceService: PersistenceService, private cuentaService: CuentaService) {

    this.isSidebarVisible = false
    this.bikerStoreFiltro = false
    this.pacrheStoreFiltro = false
    this.cantidadMayor = false
    this.badgesProductos = 0
    this.badgesProductosWish = 0
    this.subtotal = 0.0
    this.idFiltro = 0
    this.badgeDescuento = 0.0

    this.home = false
    this.nosotros = false
    this.innovacion = false
    this.biker = false
    this.personaliza = false
    this.parche = false
    this.promociones = false


    this.listaProductos = new Array<Producto>()
    this.listaProductosWish = new Array<Producto>()
    if (this.peristenceService.get("usario", StorageType.LOCAL) == undefined) {
      this.username = new Clientes()
    } else {
      this.username = this.peristenceService.get("usario", StorageType.LOCAL)
    }
    this.parcheAsignado = new Array<Producto>()


  }

  bikerStoreFiltroVisibility() {
    this.bikerStoreFiltro = true
  }


  parcheStoreFiltroVisibility() {
    this.pacrheStoreFiltro = true
  }

  obtenerListadoProductos() {

    this.listaProductos = this.peristenceService.get("listaProductos", StorageType.LOCAL)

    return this.listaProductos

  }


  cambioSeccion(seccion) {

    if (seccion == 1) {
      this.home = true
      this.nosotros = false
      this.innovacion = false
      this.biker = false
      this.personaliza = false
      this.parche = false
      this.promociones = false

    } else if (seccion == 2) {

      this.home = false
      this.nosotros = true
      this.innovacion = false
      this.biker = false
      this.personaliza = false
      this.parche = false
      this.promociones = false


    } else if (seccion == 3) {

      this.home = false
      this.nosotros = false
      this.innovacion = true
      this.biker = false
      this.personaliza = false
      this.parche = false
      this.promociones = false


    } else if (seccion == 4) {

      this.home = false
      this.nosotros = false
      this.innovacion = false
      this.biker = true
      this.personaliza = false
      this.parche = false
      this.promociones = false


    } else if (seccion == 5) {

      this.home = false
      this.nosotros = false
      this.innovacion = false
      this.biker = false
      this.personaliza = true
      this.parche = false
      this.promociones = false


    } else if (seccion == 6) {

      this.home = false
      this.nosotros = false
      this.innovacion = false
      this.biker = false
      this.personaliza = false
      this.parche = true
      this.promociones = false


    } else if (seccion == 7) {

      this.home = false
      this.nosotros = false
      this.innovacion = false
      this.biker = false
      this.personaliza = false
      this.parche = false
      this.promociones = true


    }

  }


  asignarDescuento(descuentoAplicado) {



  }


  obtenerListadoProductosWish() {

    this.listaProductos = this.peristenceService.get("listaProductosWish", StorageType.LOCAL)
    var listaWish: Array<Producto> = this.listaProductos

    return listaWish

  }

  obtenerTotalProductos() {

    this.subtotal = 0
    this.obtenerListadoProductos().forEach(element => {

      if (element.costoDescuento == null) {
        if (element.cantidad > 1) {
          console.log('Producto listado cantidad', element)
          this.cantidadMayor = true
          this.subtotal = this.subtotal + (Number.parseFloat(element.precio) * element.cantidad)
        } else {
          this.subtotal = this.subtotal + Number.parseFloat(element.precio)
        }
      } else {

        if (element.cantidad > 1) {
          console.log('Producto listado cantidad', element)
          this.cantidadMayor = true
          this.subtotal = this.subtotal + (Number.parseFloat(element.costoDescuento) * element.cantidad)
        } else {
          this.subtotal = this.subtotal + Number.parseFloat(element.costoDescuento)
        }

      }

    })

    return this.subtotal

  }

  asignarProductosWish(listaProductosfinal: Array<Producto>) {

    this.listaProductosWish = listaProductosfinal

  }

  loginInicial() {


    const formData = new FormData();
    formData.append('username', "chernanq88@gmail.com");
    formData.append('password', "3V1lwarn1ng");
    this.cuentaService.login(formData).subscribe(

      res => {

        console.log('Logeo correcto ', res)
        return true

      },
      err => {

        console.log("Error: ", err);
        return false
      }
    )

    return false


  }

  obtenerTotalProductosWish() {

    this.subtotal = 0
    this.obtenerListadoProductosWish().forEach(element => {

      this.subtotal = this.subtotal + Number.parseFloat(element.precio)

    })

    return this.subtotal

  }

  cambiarFiltro(idFiltro) {

    this.idFiltro = idFiltro

  }

  obtenerFiltro() {

    return this.idFiltro
  }


  bikerStoreFiltroNoVisibility() {
    this.bikerStoreFiltro = false
  }

  parcheStoreFiltroNoVisibility() {
    this.pacrheStoreFiltro = false
  }

  toggleSidebarVisibility() {
    this.sidebarVisibilityChange = true
  }

  toggleSidebaNoVisibility() {
    this.sidebarVisibilityChange = false
  }

  cambiarUsuario(usuario: Clientes) {
    this.username = usuario
  }


  cambiarRol(rolVentas: boolean) {
    this.rolVentas = rolVentas
  }


  aumentarProductos() {
    this.badgesProductos = this.badgesProductos + 1
  }

  totalProductosWish(numeroProductosWish) {

    this.badgesProductosWish = numeroProductosWish

  }


  borrarProductosWish() {

    this.badgesProductosWish = 0

  }
  aumentarProductosWish() {
    this.badgesProductosWish = this.badgesProductosWish + 1
  }

  quitarProductos() {
    this.badgesProductos = this.badgesProductos - 1
  }

  quitarProductosTotales() {
    this.badgesProductos = 0
  }

  borrarSesionProductos() {

    this.peristenceService.remove("listaProductos", StorageType.LOCAL)

  }


  quitarProductosWish() {
    this.badgesProductosWish = this.badgesProductosWish - 1
  }

  obtenerUsuario() {

    return this.username

  }

  obtenerRol() {

    return this.rolVentas

  }

  obtenerNombreUsuario() {

    if (this.username != undefined) {
      return this.username.nombre + " " + this.username.apellidoPaterno + " " + this.username.apellidoMaterno
    } else {
      return null
    }

  }
}
