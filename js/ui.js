class Interfaz{

	constructor(){
		this.init();
	}
	init(){
		this.construirSelect();
	}
	construirSelect(){
		cotizador.obtenerMonedasApi()
			.then(monedas => {
				//creamos un select de opciones
				const select = document.querySelector('#criptomoneda');
				//iteramos el resultado de la API la cual devuelve un objeto
				for(const [key, value] of Object.entries(monedas.monedas.Data)){
					const opcion = document.createElement('option');
					opcion.value = value.Symbol;
					opcion.appendChild(document.createTextNode(value.CoinName));
					select.appendChild(opcion);
				}
			})
	}
	mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        const divMensaje = document.querySelector('.mensajes');
		divMensaje.appendChild(div);
		setTimeout(() => {
			document.querySelector('.mensajes div').remove();
		},3000);
	}
}