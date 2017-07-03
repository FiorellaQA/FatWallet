function Preload(){
	this.jsonTarjetas = [
		{
			"numero":"424242****4242",
			"nombre":"Cuenta de ahorros",
			"saldo":1234.56,
			"transacciones":[
				{
					"nombre":"China Wok",
					"monto":42.50,
					"isResta":true,
					"fecha":"2017-07-07 10:10:10"
				},
				{
					"nombre":"Tanta",
					"monto":180.25,
					"isResta":true,
					"fecha":"2017-07-06 13:45:00"
				},
				{
					"nombre":"Sueldo",
					"monto":10.00,
					"isResta":false,
					"fecha":"2017-07-01 00:00:00"
				}
			]
		},
		{
			"numero":"123456****7890",
			"nombre":"Tarjeta de Crédito",
			"saldo":9876.54,
			"transacciones":[
				{
					"nombre":"China Wok",
					"monto":42.50,
					"isResta":true,
					"fecha":"2017-07-07 10:10:10"
				},
				{
					"nombre":"Tanta",
					"monto":180.25,
					"isResta":true,
					"fecha":"2017-07-06 13:45:00"
				},
				{
					"nombre":"Sueldo",
					"monto":10.00,
					"isResta":false,
					"fecha":"2017-07-01 00:00:00"
				}
			]
		}
	];
	this.jsonPresupuesto = {};

	this.loading = function (){
		tarjetasGlobal = [];
		
		this.jsonTarjetas.forEach(function (el) {
			var transacciones = [];
			el.transacciones.forEach(function (elTrx) {
				var trx = new Transaccion(elTrx.nombre, elTrx.monto, elTrx.fecha);
				transacciones.push(trx);
			});

			var tarjeta = new Tarjeta(el.numero, el.nombre, el.saldo, transacciones);
			tarjetasGlobal.push(tarjeta);
			console.log(tarjeta.mostrarNumero());
		});
	}
}