import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalIP } from '../../modelos/GlobalIP'

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

 
  postClientes = "api/usuarios/registro"


  getUsuario = "api/usuarios/me"

  getUsuarioEspecifico = "api/registro/obtenerUsuarioEspecifico/"

  getLogin = "login"

  recuperaPassword = "api/clientes/recuperarPassword"


  constructor(private httpClient: HttpClient) {



  }


  altaCliente(data): Observable<any> {
    console.log("altaCliente");
    var headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json');
    headers1.append('Access-Control-Allow-Origin', '*')
    const httpOptions = {
      headers: headers1,
      withCredentials: true,
    };

    return this.httpClient.post(GlobalIP.BASEURLLOCAL + this.postClientes + "/true", data, httpOptions).pipe(
      map((res: HttpResponse<Array<any>>) => {

        return res;
      })
    )
  }


  login(data: FormData): Observable<any> {
    console.log("altaCliente");
    var headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json');
    headers1.append('Access-Control-Allow-Origin', '*')
    const httpOptions = {
      headers: headers1,
      withCredentials: true,
    };

    return this.httpClient.post(GlobalIP.BASEURLLOCAL + this.getLogin, data, httpOptions).pipe(
      map((res: HttpResponse<Array<any>>) => {

        return res;
      })
    )
  }


  obtenerDatoCliente(): Observable<any> {
    console.log("altaCliente");
    var headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json');
    headers1.append('Access-Control-Allow-Origin', '*')
    const httpOptions = {
      headers: headers1,
      withCredentials: true,
    };

    return this.httpClient.get(GlobalIP.BASEURLLOCAL + this.getUsuario, httpOptions).pipe(
      map((res: HttpResponse<Array<any>>) => {

        return res;
      })
    )
  }


  obtenerLogeo(correo:string, contrasena: string): Observable<any> {
    console.log("altaCliente");
    var headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json');
    headers1.append('Access-Control-Allow-Origin', '*')
    const httpOptions = {
      headers: headers1,
      withCredentials: true,
    };

    return this.httpClient.get(GlobalIP.BASEURLLOCAL + this.getUsuarioEspecifico + correo + "/" + contrasena, httpOptions).pipe(
      map((res: HttpResponse<Array<any>>) => {

        return res;
      })
    )
  }


  logout(data: FormData): Observable<any> {
    console.log("altaCliente");
    var headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json');
    headers1.append('Access-Control-Allow-Origin', '*')
    const httpOptions = {
      headers: headers1,
      withCredentials: true,
    };

    return this.httpClient.post(GlobalIP.BASEURLLOCAL + "logout", data, httpOptions).pipe(
      map((res: HttpResponse<Array<any>>) => {

        return res;
      })
    )
  }

  recupera(data: FormData): Observable<any> {
    console.log("altaCliente");
    var headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json');
    headers1.append('Access-Control-Allow-Origin', '*')
    const httpOptions = {
      headers: headers1,
      withCredentials: true,
    };

    return this.httpClient.post(GlobalIP.BASEURLLOCAL + this.recuperaPassword, data, httpOptions).pipe(
      map((res: HttpResponse<Array<any>>) => {

        return res;
      })
    )
  }

}
