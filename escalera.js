class Escalera 
{
    constructor(origen, destino) 
    {
        this._origen = origen

        this._destino = destino
    }

    set Origen(origen) 
    {
        this._origen = origen
    }

    set Destino(destino) 
    {
        this._destino = destino
    }

    get Origen() 
    {
        return this._origen
    }

    get Destino() 
    {
        return this._destino
    }

    escalera = (casilla) => 
    {
        if (casilla === Escalera.Origen)
        
            casilla = Escalera.Destino
    }
}
export default Escalera

class Dado
{
    jugar() 
    { 
        return Math.floor (Math.random() * 6) + 1;
    }
}