d3.json("data/finds_period.json", function(error, data) {
  if (error) throw error;

  var keys = [];
  var keysRange = []
  var calcMean;

  var colorScale = d3.scaleLog()
      .domain([1, 7443])
      .range(["lightgray", "darkblue"]);

  var logScale = d3.scaleLog()
      .domain([1, 7443])
      .range([1,12])

  data.forEach(function(d, i) { keys[i] = d.Number; i++; })
  data.forEach(function(d, i) { calcMean = d.high + d.low; d.mean = (calcMean / 2) });
  data.forEach(function(d, i) { keysRange[i] = logScale(keys[i]); i++; })

  data.sort(function(a, b) { return b.low - a.low; });

  var low = d3.min(data, function(d) { return d.low})
  var high = d3.max(data, function(d) { return d.high})

  var svg = d3.select("#timeline"),
      margin = {top: 40, right: 50, bottom: 30, left: 80},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      
  g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(function(d) { return d.Period; }))
      .paddingInner(0.05)
      .align(0.1);

  var scaleX = d3.scaleLinear()
      .domain([-10000, high])
      .range([0, width]);

  var y = d3.scaleLinear()
      .domain([low, high]).nice()
      .range([height, 0]);

  var scaleY = d3.scaleBand()
      .domain(data.map(function(d) { return d.Period; }))
      .range([0, height])
      .paddingInner(0.05)
      .align(0.1);

  // var z = d3.scaleOrdinal()
  //     .domain(keysRange)
  //     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

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
      .attr("x", function(d) { return x(d.Period); })
      .attr("y", function(d) { return y(d.high); })
      .attr("height", function(d) { return y(d.low) - y(d.high); })
      .attr("width", function(d) { return logScale(d.Number); })
      .attr("fill", function(d) { return colorScale(d.Number) })
      .on('mouseover', tool_tip.show)
      .on('mouseout', tool_tip.hide);
  
  // g.append("g")
  //     .attr("class", "axis")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(scaleX));

  g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(scaleY))
    .append("text")
      .attr("x", y(y.ticks().pop()) + 0.5)
      .attr("y", 2)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Period");

  // g.append("g")
  //     .attr("class", "axis")
  //     .call(d3.axisLeft(y))
  //   .append("text")
  //     .attr("x", 2)
  //     .attr("y", y(y.ticks().pop()) + 0.5)
  //     .attr("dy", "0.32em")
  //     .attr("fill", "#000")
  //     .attr("font-weight", "bold")
  //     .attr("text-anchor", "start")
  //     .text("Year");

});

  // var legend = g.append("g")
  //     .attr("font-family", "sans-serif")
  //     .attr("font-size", 10)
  //     .attr("text-anchor", "end")
  //   .selectAll("g")
  //   .data(keysRange)
  //   .enter().append("g")
  //     .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // legend.append("rect")
  //     .attr("x", width - 19)
  //     .attr("width", 19)
  //     .attr("height", 19)
  //     .attr("fill", function(d) { return colorScale(d)});

  // legend.append("text")
  //     .attr("x", width - 24)
  //     .attr("y", 9.5)
  //     .attr("dy", "0.32em")
  //     .text(function(d) { return d; });
