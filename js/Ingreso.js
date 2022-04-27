
//CLASE INGRESOS CON ATRIBUTOS DE HERENCIA DE CLASE PADRES DATO
class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}