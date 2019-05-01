class Jugador {

    constructor(name) 
    {
        this.posicionActual = 0

        this.name = name
    }

    avanzar(numeroCasillas) 
    {
        this.posicionActual += numeroCasillas

        return this.posicionActual
    }

    get Name() 
    {
        return this.name
    }

    get PosicionActual() 
    {
        return this.posicionActual
    }

    set PosicionActual(posicion) 
    {
        this.posicionActual = posicion
    }
} export default gamer


