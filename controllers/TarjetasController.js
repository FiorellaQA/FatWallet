
function loadTarjetasView(){
	$('#print').load('views/tarjetasView/tarjetasView.html', function () {
		renderTarjetasView()
	});
}

function renderTarjetasView(){
	tarjetasGlobal.forEach(function (tarjeta) {
		var template_card = $(".tarjetasView").find("#template_card").clone();

		template_card.find('.tarjetas__nombre').html(tarjeta.mostrarNombre());
		template_card.find('.tarjetas__numero').html(tarjeta.mostrarNumero());
		template_card.find('.tarjetas__saldo').html(tarjeta.mostrarSaldo());

		$(".tarjetasView").find("#tarjeta").append(template_card.html());
	});
}
