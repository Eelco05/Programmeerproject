d3.json("data/finds_period.json", function(error, data) {
  if (error) throw error;

  // var totalPeriod = d3.nest()
  //     .key(function(d) { return d.Period})
  //     .rollup(function(e) { return { 
  //               "Number": d3.sum(e, function(d) { return +d.Number; })
  //             }
  //           })
  //     .entries(raw_data);

  // console.log(function bla (d, i) { totalPeriod[i].key; i++})
  // console.log(bla(totalPeriod, 0))

  // var data = d3.nest()
  //     .key(function(d) { return d.Campaign; })
  //     .key(function(d) { return d.Period; })
  //     .entries(raw_data);

  // // deleting undated finds
  // data.splice(49);

  // console.log(data["0"])

  var keys = [];
  var keysRange = []
  var calcMean;

  var colorScale = d3.scaleLog()
      .domain([1, 7443])
      .range(['lightgray','steelblue']);

  var logScale = d3.scaleLog()
      .domain([1, 7443])
      .range([0,11])

  data.forEach(function(d, i) { keys[i] = d.Number; i++; })
  data.forEach(function(d, i) { calcMean = d.high + d.low; d.mean = (calcMean / 2) });
  data.forEach(function(d, i) { keysRange[i] = logScale(keys[i]); i++; })

  data.sort(function(a, b) { return b.mean - a.mean; });

  console.log(data);

  var low = d3.min(data, function(d) { return d.low})
  var high = d3.max(data, function(d) { return d.high})

  var svg = d3.select("#timeline"),
      margin = {top: 40, right: 80, bottom: 30, left: 20},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      
  g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // var x = d3.scaleBand()
  //     .range([0, width])
  //     .domain(data.map(function(d) { return d.Period; }))
  //     .paddingInner(0.05)
  //     .align(0.1);

  // var y = d3.scaleLinear()
  //     .domain([low, high]).nice()
  //     .range([height, 0]);

  // var z = d3.scaleOrdinal()
  //     .domain(keysRange)
  //     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


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

  // g.append("g")
  //     .attr("class", "axis")
  //     .call(d3.axisLeft(scaleY))
  //   .append("text")
  //     .attr("x", 5)
  //     .attr("y", 0.5)
  //     .attr("dy", "0.32em")
  //     .attr("fill", "#000")
  //     .attr("font-weight", "bold")
  //     .attr("text-anchor", "start")
  //     .text("Period");

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