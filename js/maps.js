function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 35.804760, lng: 20.550983},
		zoom: 2,
	});

	var markerPosities = [
		{title: "North America" ,
			position: {lat: 47.161890, lng: -101.873985}},
		{title: "South America" ,
			position: {lat: -9.597565, lng: -56.231367}},
		{title: "Europe" ,
			position: {lat: 48.626817, lng: 13.511517}},
		{title: "Africa" ,
			position: {lat: 22.297859, lng: 18.669011}},
		{title: "Asia" ,
			position: {lat: 62.054184, lng: 93.757283}},
		{title: "Oceania" ,
			position: {lat: -25.363, lng: 131.044}}];
			
	//loop door...
	var grenzen = new google.maps.LatLngBounds();
	var largeInfoWindow = new google.maps.InfoWindow();
	var markers = []
	for (var i=0; i<markerPosities.length; i++){
		var marker = new google.maps.Marker({
		map: map,
		position: markerPosities[i].position,
		title: markerPosities[i].title,
		});

		marker.addListener('click', function(){
		verplaatsInfoWindow(this, largeInfoWindow);
		});
		
		grenzen.extend(marker.position);
		}		
		markers.push(marker);
		

	function verplaatsInfoWindow(marker, infoWindow){
		if (infoWindow.marker != marker){
			infoWindow.marker = marker
			infoWindow.setContent('<h2>'+marker.title+'</h2>'+'<a href="#'+marker.title+'">Click here!</a>');
			infoWindow.open(map, marker);
		}
	}
	

	
}


