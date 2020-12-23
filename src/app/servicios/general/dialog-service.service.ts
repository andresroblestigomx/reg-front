import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private router: Router) {


  }

  navigate(ruta: string) {


    this.router.navigate([ruta])

  }



  navigateWhitParameters(ruta: string, data: any) {



    this.router.navigate([ruta], { queryParams: { ...data, skipLocationChange: true } })

  }




  dialog(title: string, text: string, icon: any, ruta) {

    Swal.fire({
      allowOutsideClick: false,
      title: '<img src="https://tigomx.com/triver-images/triver.png" alt="Smiley face" height="200" width="200">',
      text: text,
      icon: icon,
      confirmButtonColor: '#f3583e',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-dialog',
        container: 'container-final'


      }
    }).then(result => {
      if (result.value) {

        if (title != 'Error')
          this.router.navigate(['/' + ruta])

      }
    })


  }



  dialogSinRuta(title: string, text: string, icon: any) {

    Swal.fire({
      allowOutsideClick: false,
      title: '<img src="https://tigomx.com/triver-images/triver.png" alt="Smiley face" height="200" width="200">',
      text: text,
      icon: icon,
      confirmButtonColor: '#f3583e',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-dialog',
        container: 'container-final'


      }
    }).then(result => {
      if (result.value) {



      }
    })


  }


  dialogConfirmacion(title: string, text: string, icon: any, ruta, idParametro: number) {


    Swal.fire({
      allowOutsideClick: false,
      title: '<img src="https://tigomx.com/triver-images/triver.png" alt="Smiley face" height="200" width="200">',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f3583e',
      cancelButtonColor: '#168c95',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-dialog',
        container: 'container-final'


      }
    }).then((result) => {
      if (result.value) {



      } else {

        if (1) {
          console.log('Redirige correctamente ')
          this.router.navigate(['/' + ruta])

        }

      }
    })



  }
}
