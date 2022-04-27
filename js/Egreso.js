
//CLASE EGRESO CON ATRIBUTOS DE HERENCIA DE CLASE PADRES DATO
class Egreso extends Dato{
    static contadorEgresos = 0;
  
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}