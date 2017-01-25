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

d3.json("data/finds_period.json", function(error, data) {
  if (error) throw error;
  
  var keys = [];
  var i = 0;

  data.forEach(function(d, i) { keys[i] = d.Period; i++; })

  var number = [];
  i = 0;
  data.forEach(function(d, i) { number[i] = d.Number; i++; })
  console.log(number)

  data.sort(function(a, b) { return a.low - b.low; });

  x.domain(data.map(function(d) { return d.Period; }));
  y.domain([-10000, d3.max(data, function(d) { return d.high; })]).nice();
  z.domain(keys);

  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("class", function(d) { return d.data.Period; })
      .attr("x", function(d) { return x(d.data.Period); })
      .attr("y", function(d) { return y(d.data.high); })
      .attr("height", function(d) { return y(d.data.low) - y(d.data.high); })
      .attr("width", x.bandwidth())
      .attr("fill", "steelblue");

  g.selectAll(".d.data.Period")
    .attr("fill", "black");
  
    

  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Year");

  var legend = g.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", z);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return d; });
});