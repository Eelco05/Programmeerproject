var bubble_map = new Datamap({
	element: document.getElementById("datamap"),
	scope: 'world',
	geographyConfig: {
		popupOnHover: false,
		highlightOnHover: false
	},
  	setProjection: function(element) {
		var projection = d3.geo.mercator()
		.center([14.665286, 41.564891])
		.rotate([0, 0])
		.scale(6000)
		.translate([element.offsetWidth / 2, element.offsetHeight / 2]);
		var path = d3.geo.path().projection(projection);

		return {path: path, projection: projection};
    },
    fills: {
    defaultFill: '#ABDDA4',
    ITA: 'red',
  }
});
bubble_map.bubbles([
  {
    name: 'Project Area',
    city: 'Molise CB, Italy',
    radius: 20,
    fillKey: 'ITA',
    latitude: 41.631457,
    longitude: 14.491797
  }
], {
	popupTemplate: function(geo, data) {
    return '<div class="hoverinfo">' + '<strong>' + data.name + '</strong>' + '<br>' + data.city
  }
});