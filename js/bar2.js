var svg = d3.select("#d4"),
    margin = {top: 40, right: 50, bottom: 30, left: 80},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var tool_tip = d3.tip()
  .attr("class", "d3-tip")
  .style("opacity", 0.5)
  .offset([-8, 0])
  .html(function(d) { return "Period: " + d.Period + "<br>" + 
    "Total finds: " + d.Number + "<br>" +
    "Timespan: " + d.low + " to " + d.high + " BC"; 
});
g.call(tool_tip)

d3.json("data/finds_period.json", function(error, data) {
  if (error) throw error;
  
  var colorScale = d3.scaleLog()
  .domain([1, 7443])
  .range(["lightgray", "darkblue"]);

  var logScale = d3.scaleLog()
  .domain([1, 7443])
  .range([0,20])

  var keys = [];
  var keysRange = []
  var i = 0;

  data.forEach(function(d, i) { keys[i] = d.Number; i++; })

  var sum;
  i = 0;
  data.forEach(function(d, i) { 
    sum = d.high + d.low
    d.mean = (sum / 2)
  })

  // console.log(data)

  i = 0;
  data.forEach(function(d, i) { 
    keysRange[i] = logScale(keys[i])
    i++;  
  })
  // console.log(keysRange);

  // console.log(data)

  data.sort(function(a, b) { return a.mean - b.mean; });

  var low = d3.min(data, function(d) { return d.low})
  var high = d3.max(data, function(d) { return d.high})

  x.domain(data.map(function(d) { return d.Period; }));
  y.domain([low, high]).nice();
  z.domain(keysRange);

  // console.log(keys)

  g.append("g")
      .attr("class", "bar")
    .selectAll("g")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) { return d.Period; })
      .attr("x", function(d) { return x(d.Period); })
      .attr("y", function(d) { return y(d.high); })
      .attr("height", function(d) { return y(d.low) - y(d.high); })
      .attr("width", x.bandwidth())
      .attr("fill", function(d) { return colorScale(d.Number) })
      .on('mouseover', tool_tip.show)
      .on('mouseout', tool_tip.hide);
  
  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Year");

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
