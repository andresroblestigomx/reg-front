import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogServiceService } from './servicios/general/dialog-service.service';
import { GlobalService } from './servicios/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reg';


  formSesion: FormGroup

  constructor(private fb: FormBuilder, public servicioGlobal: GlobalService, private dialogService: DialogServiceService) {


    this.formSesion = fb.group({
      correo: [''],
      nombres: [''],
      apellidoP: [''],
      apellidoM: [''],
      telefono: [''],
      password: [''],
      fecha: [''],


    });



  }

  abrirCarrito() {

    this.dialogService.navigate('checkout')

  }

  eventoFin() {

    console.log('mos over hover function ' + this.servicioGlobal.sidebarVisibilityChange)
    //this.servicioGlobal.bikerStoreFiltro = false

    //this.validacion = false

  }
}
