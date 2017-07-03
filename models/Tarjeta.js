function Tarjeta(numero, name_card, saldo, transacciones) {
	this.numero = numero;
	this.nombre = name_card;
	this.saldo = saldo;
	this.transacciones = transacciones;

	this.mostrarNumero = function() {
		return this.numero;
	};
	this.mostrarNombre = function() {
		return this.nombre;
	};
	this.mostrarSaldo = function() {
		return this.saldo;
	};
	this.mostrarTransacciones = function(){
		return this.transacciones;
	}
}
