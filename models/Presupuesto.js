function Presupuesto(nombre, monto, tiempo) {
	this.nombre = nombre;
	this.monto = monto;
	this.tiempo = tiempo;
	this.mostrarNombre = function () {
		return this.nombre;
	};
	this.mostrarMonto = function () {
		return this.monto;
	};
	this.mostrarTiempo = function () {
		return this.tiempo;
	}
}
