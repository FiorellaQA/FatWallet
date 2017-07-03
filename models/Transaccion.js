function Transaccion(nombre, monto, fecha) {
	this.nombre = nombre;
	this.monto = monto;
	this.fecha = fecha;
	this.expense = true;
	this.income = false;
	this.mostrarNombre = function () {
		return this.nombre;
	};
	this.mostrarMonto =  function () {
		return this.monto;
	};
	this.mostrarFecha = function () {
		return this.fecha;
	}
}

