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
	mostrarResultado(resultado, moneda, crypto){
		//la api devuelve 3 valores, la llave(crypto), la moneda tradicional, y el valor, por ello necesitamos los 3 parametros.
		const limpiarResultado = document.querySelector('#resultado > div');
		if (limpiarResultado){
			limpiarResultado.remove();
		}
		const datosMoneda = resultado[crypto][moneda];
		let precio = datosMoneda.PRICE.toFixed(2);
		let variacion = datosMoneda.CHANGEPCTDAY.toFixed(2);
		let fechaUpdate = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR');
		let templateHTML = `
			<div class='card bg-warning'>
				<div class='card-body text-light'>
					<h2 class='card-title'>Resultado:</h2>
					<p>El precio de ${datosMoneda.FROMSYMBOL} a ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
					<p>Variación de precio: % ${variacion}</p>
					<p>Ultima actualización: ${fechaUpdate}</p>
				</div>
			</div>
		`;
		const spinner = document.querySelector('.contenido-spinner');
		spinner.style.display = 'block';
		setTimeout(()=> {
			spinner.style.display = 'none';
			//inserto el HTML
			document.querySelector('#resultado').innerHTML = templateHTML;
			/* setTimeout(()=> {
				document.querySelector('#resultado').remove();
			}, 5000); */
		}, 3000);
	}
}
