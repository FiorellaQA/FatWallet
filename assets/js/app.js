
$(function () {
	$('.flex-container').after("<hr>");
	$('#hamburguer').on('click', function () {
		$('#mySidenav').css('width', '250px');
	});
	$('.closebtn').on('click', function () {
		$('#mySidenav').css('width', '0px');
	});

	loadTarjetasView();
});