
// Programmeerproject

// Eelco Alink <eelco.alink@gmail.com>
// St.nr: 10459006

//                 ====
//                 \\// 
//            <=>===[]===<=>
//                  []
//                  []
//                  []
//                 _[]_
//                 \  /
//                  \/

function colorLegend () {
	// console.log("legend");

	var w = 400, h = 140;

	var key = d3.select("#timeline_legend")
		.append("svg")
			.attr("class", "colorLegend")
		.append("g")
			.attr("width", w)
			.attr("height", h);

	var legend = key.append("defs")
		.append("svg:linearGradient")
			.attr("id", "gradient")
			.attr("x1", "100%")
			.attr("y1", "100%")
			.attr("x2", "0%")
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
			.range([w - 100, 0])
			.domain([7443, 1]);

	var yLog = d3.scaleLog()
			.range([w - 100, 0])
			.domain([7443, 1]);

	// var yAxis = d3.svg.axis()
	// 		.scale(y)
	// 		.orient("right")
	// 		.ticks(20, d3.format(",.1s"));

	key.append("g")
			.attr("class", "y axis")
			.attr("transform", "translate(0,50)")
			.call(d3.axisBottom(yLog).tickValues([2,100,3500]).tickFormat(d3.format(",.0f")))
		.append("text")
			.attr("x", 90)
			.attr("y", 25)
			.attr("dy", "0.32em")
			.attr("fill", "black")
			.attr("font-weight", "bold")
			.attr("text-anchor", "start")
			.text("Total number of finds (log)");

}