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

// seperate d3 visualisation to show

// main function
function colorLegend () {

	// visualistion dimensions
	var width = 400, height = 140;

	// scaling legend logarithmically
	var yLog = d3.scaleLog().range([width - 100, 0]).domain([7443, 1]);

	// creating svg
	var key = d3.select("#timeline_legend")
		.append("svg")
			.attr("class", "colorLegend")
		.append("g")
			.attr("width", width)
			.attr("height", height);

	// setting color gradient
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

	// adding color gradient to a rect
	key.append("rect")
			.attr("width", width - 100)
			.attr("height", height - 100)
			.style("fill", "url(#gradient)")
			.attr("transform", "translate(0,10)");

	// adding custom log axis
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