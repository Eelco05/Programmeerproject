var w = 140, h = 400;

var key = d3.select("#timeline_legend")
	.append("g")
		.attr("class", "legendTime")
		.attr("width", w)
		.attr("height", h);

var legend = key.append("defs")
	.append("svg:linearGradient")
		.attr("id", "gradient")
		.attr("x1", "100%")
		.attr("y1", "0%")
		.attr("x2", "100%")
		.attr("y2", "100%")
		.attr("spreadMethod", "pad");

legend.append("stop")
		.attr("offset", "0%")
		.attr("stop-color", "blue")
		.attr("stop-opacity", 1);

legend.append("stop")
		.attr("offset", "100%")
		.attr("stop-color", "lightgray")
		.attr("stop-opacity", 1);

key.append("rect")
		.attr("width", w - 100)
		.attr("height", h - 100)
		.style("fill", "url(#gradient)")
		.attr("transform", "translate(0,10)");

var y = d3.scaleLinear()
		.range([300, 0])
		.domain([1, 7443]);

var yAxis = d3.svg.axis()
		.scale(y)
		.orient("right");

key.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(41,10)")
		.call(d3.axisRight(y))
	.append("text")
		.attr("x", 5)
		.attr("y", 0.5)
		.attr("dy", "0.32em")
		.attr("fill", "#000")
		.attr("font-weight", "bold")
		.attr("text-anchor", "start")
		.text("Total finds");

		