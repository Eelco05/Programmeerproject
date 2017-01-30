d3.json("data/finds_period.json", function(error, data) {
  if (error) throw error;

  var keys = [];
  var keysRange = []
  var calcMean;

  var colorScale = d3.scaleLog()
      .domain([1, 7443])
      .range(['lightgray','blue']);

  var logScale = d3.scaleLog()
      .domain([1, 7443])
      .range([1,2])

  data.forEach(function(d, i) { keys[i] = d.Number; i++; })
  data.forEach(function(d, i) { calcMean = d.high + d.low; d.mean = (calcMean / 2) });
  data.forEach(function(d, i) { keysRange[i] = logScale(keys[i]); i++; })

  data.sort(function(a, b) { return b.mean - a.mean; });

  // console.log(data);

  var low = d3.min(data, function(d) { return d.low})
  var high = d3.max(data, function(d) { return d.high})

  var svg = d3.select("#timeline"),
      margin = {top: 40, right: 80, bottom: 30, left: 40},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      
  g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var scaleX = d3.scaleLinear()
      .domain([-10000, high]).nice()
      .range([0, width]);

  var scaleY = d3.scaleBand()
      .domain(data.map(function(d) { return d.Period; }))
      .range([0, height])
      .paddingInner(0.05)
      .align(0.1);

  var tool_tip = d3.tip()
    .attr("class", "d3-tip")
    .style("opacity", 0.5)
    .offset([-8, 0])
    .html(function(d) { return "Period: " + "<strong>" + d.Period + "</strong>" + "<br>" + 
      "Total finds: " + "<strong>" + d.Number + "</strong>" + "<br>" +
      "Timespan: " + "<strong>" + d.low + "</strong>" + " to " + "<strong>" + d.high + "</strong>" + " BC"; 
  });
  g.call(tool_tip)

  g.append("g")
      .attr("class", "bar")
    .selectAll("g")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) { return d.Period; })
      .attr("x", function(d) { return scaleX(d.low); })
      .attr("y", function(d) { return scaleY(d.Period); })
      .attr("height", 11) //function(d) { return logScale(d.Number); })
      .attr("width", function(d) { return scaleX(d.high) - scaleX(d.low); })
      .attr("fill", function(d) { return colorScale(d.Number) })
      .on('mouseover', tool_tip.show)
      .on('mouseout', tool_tip.hide);

  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(scaleX));

  g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(scaleY))
    .append("text")
      .attr("x", 5)
      .attr("y", 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Period");

var w = 140, h = 400;

var key = d3.select("#timeline")
  .append("svg")
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
    // .attr("x", 700)
    // .attr("y", 100)
    .attr("width", w - 100)
    .attr("height", h - 100)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(0,10)");

var y = d3.scaleLinear()
    .range([1, 7443])
    .domain([1, 2]);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right");

key.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(41,10)")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("axis title");

});