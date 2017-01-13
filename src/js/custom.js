$(document).ready(function(){
	//tooltip
	$('.tooltipped').tooltip({delay: 50});


	$("#botonciudad").on('click', function(){
		$("#tipovehiculo").removeClass('hide');
		console.log("click");
	})

	$(function() {
		$('.btnselected').on('change', function() {
			var $sels = $('.btnselected option:selected[value=""]');
			$("#botonciudad").attr("disabled", $sels.length > 0);
		}).change();
	});


	$('.check').change(function() {
		if ($('.check:checked').length) {
			$('#btn-transport').removeAttr('disabled');
		} else {
			$('#btn-transport').attr('disabled', 'disabled');
		}
	});
	

});
//INICIAR MAPA
function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: {lat: -33.45, lng: -70.6667}
	});
	directionsDisplay.setMap(map);
	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	};
	document.getElementById('start').addEventListener('change', onChangeHandler);
	document.getElementById('end').addEventListener('change', onChangeHandler);
}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('end').value,
		travelMode: google.maps.TravelMode.DRIVING
	}, function(response, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		} else {
		}
	});
}