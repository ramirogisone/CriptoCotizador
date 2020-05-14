class API{
    constructor(apikey){
        this.apikey = apikey;
    }
    async obtenerMonedasApi(){
        const url=`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        //fetch a la api
        const urlObtenerMonedas = await fetch(url);
        //respuesta en json
        const monedas = await urlObtenerMonedas.json();
        console.log(monedas);
        return {
            monedas
        };
    }
}