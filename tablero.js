class Tablero {
    constructor () 
    {
        this._casillas = null;
    }
    
    set Tablero(init) 
    {
        if (init === true) 
        {
            let casillas = [];
            
            for (let index = 1; index <= 100; index++)
            {
                casillas.push(index);
            }

            //-----------------------------------------
            escaleras[1] = 38;
            escaleras[6] = 14;
            escaleras[7] = 31;
            escaleras[14] = 26;
            escaleras[20] = 42;
            escaleras[27] = 84;
            escaleras[35] = 44;
            escaleras[50] = 67;
            escaleras[70] = 91;
            escaleras[77] = 98;

          //------------------------------------------- 
            serpientes[15] = 6;
            serpientes[45] = 25;
            serpientes[48] = 11;
            serpientes[61] = 19;
            serpientes[63] = 60;
            serpientes[73] = 53;
            serpientes[88] = 68;
            serpientes[91] = 88;
            serpientes[94] = 75;
            serpientes[98] = 80;

            this._casillas = casillas;
        }
        
        else

            return false;
    }

    get Tablero() 
    {
        return this._casillas;
    }

}