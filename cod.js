$(document).ready(function(){

	var circulo 	= '<div class="circulo"></div>',
		equis		= '<div class="equis"></div>',
		Ctrl		= false,
		jugador1,
		jugador2;
	$('.item').on('click', function(){
		$(this).append(circulo);
	});

});