function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.92898, lng: 5.395022},
		zoom: 0,
	});

	var logo = "images/Logo_klein.png";
	var markerPosities = [
		{title: "UC Leuven-Limburg - Campus Diepenbeek" ,
			position: {lat: 50.92898, lng: 5.395022}},
		{title: "UC Leuven-Limburg - Campus Proximus" ,
			position: {lat: 50.8468791, lng: 4.7251748}}];
			
	//loop door...
	var grenzen = new google.maps.LatLngBounds();
	var largeInfoWindow = new google.maps.InfoWindow();
	var markers = []
	for (var i=0; i<markerPosities.length; i++){
		var marker = new google.maps.Marker({
		map: map,
		position: markerPosities[i].position,
		title: markerPosities[i].title,
		icon: logo
		});
		marker.addListener('click', function(){
		verplaatsInfoWindow(this, largeInfoWindow);
		});
		
		grenzen.extend(marker.position);
		}
		
		map.fitBounds(grenzen);
		
		markers.push(marker);

		
	var infowindow = new google.maps.InfoWindow({
		content: "<h2>UC Leuven-Limburg - Campus Diepenbeek</h2>"+
		"<p>Agoralaan 1, 3590 Diepenbeek</p>"
	});	

	function verplaatsInfoWindow(marker, infoWindow){
		if (infoWindow.marker != marker){
			infoWindow.marker = marker
			infoWindow.setContent('<h1>'+marker.title+'<h1>');
			infoWindow.open(map, marker);
		}
	}
}


