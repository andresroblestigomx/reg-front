export class Producto{

    constructor(){

            this.aspects = new Array<string>()

    }

    id: number
    nombre: string
    desc: string
    precio: string
    costoDescuento: string
    porcentajeDescuento: number
    talla: string
    color: string
    cantidad: number
    url: string
    uuid: string
    aspects: Array<string>
    categoria: number
    descripcion: string
    descripcionLarga: string
    idProductAttribute: number
    propiedades: Propiedades
    

}


export class Propiedades{

    totalImagenes
}