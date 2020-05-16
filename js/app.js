const cotizador = new API('6d07b32f7af19d96e58dd8328ec59b24571ab7dcb107d13a28b37455b928a106');
const ui = new Interfaz();

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (ev) => {
	ev.preventDefault();
	const moneda = document.getElementById('moneda');
	const monedaSelect = moneda.options[moneda.selectedIndex].value;
	const criptomoneda = document.getElementById('criptomoneda');
	const criptomonedaSelect = criptomoneda.options[criptomoneda.selectedIndex].value;
	if(monedaSelect === '' || criptomonedaSelect === ''){
		ui.mostrarMensaje('Faltan datos por completar', 'alert bg-danger text-center');
	}else{
		cotizador.obtenerValores(monedaSelect, criptomonedaSelect)
			.then(data => {
				ui.mostrarResultado(data.respuesta.RAW, monedaSelect, criptomonedaSelect);
			})
	}
})