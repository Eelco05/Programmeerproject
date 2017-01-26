var bubble_map = new Datamap({
	element: document.getElementById("datamap"),
	scope: 'world',
	geographyConfig: {
		popupOnHover: false,
		highlightOnHover: false
	},
  	setProjection: function(element) {
		var projection = d3.geo.mercator()
		.center([14.739759, 41.471510])
		.rotate([0, 0])
		.scale(12000)
		.translate([element.offsetWidth / 2, element.offsetHeight / 2]);
		var path = d3.geo.path().projection(projection);

		return {path: path, projection: projection};
    },
    fills: {
    defaultFill: '#ABDDA4',
    Site: 'red',
  }
});
bubble_map.bubbles([
  {
    name: 'Samnite Sancuary',
    city: 'San Giovanni in Galdo, Italy',
    radius: 10,
    fillKey: 'Site',
    latitude: 41.590720,
    longitude: 14.752160
  },
  {
    name: 'Samnite Sancuary',
    city: 'Gildone, Italy',
    radius: 10,
    fillKey: 'Site',
    latitude: 41.510343,
    longitude: 14.739780
  }
], {
	popupTemplate: function(geo, data) {
    return '<div class="hoverinfo">' + '<strong>' + data.name + '</strong>' + '<br>' + data.city
  }
});