export class Clientes {

    constructor() {

        this.datosCliente = new DatosCliente()

    }

    idUsuario: number
    correo: string
    nombre: string
    telefonoCelular: string
    apellidoPaterno: string
    apellidoMaterno: string
    fechaNacimiento: string
    contrasena: string
    roles: Array<Number>
    activo: boolean
    sexo: string
    banderaGeneral: boolean
    datosCliente: DatosCliente
    edad: string


}


export class DatosCliente {

    constructor() {

    }

    tipoMoto: string
    comoNosConociste: string
    prioridadPrenda: string

}