
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

// based on the work of Mike Bostock at https://bl.ocks.org/mbostock/3886208

var dataLoc = ["data/finds_period_total.json", "data/finds_period_2004.json", "data/finds_period_2005.json"];
    year = 0;

changeYear(year);

function changeYear(i) { 
  year = i 
    d3.json(dataLoc[i], function(error, data) {
    if (error) throw error;
      d3.select("#timeline").selectAll("*").remove();
      timeline(data);
  })
}

// gridlines in x axis function
function make_x_gridlines(scaleX) {   
    return d3.axisBottom(scaleX)
        .tickValues([-10000,-7000,-3000,-350,-50,500,1500,1800]);
}

// main function
function timeline (data) {
  
  // visualisation dimentions
  var svg = d3.select("#timeline"),
      margin = {top: 20, right: 20, bottom: 50, left: 20},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      
  g = svg.append("g")
      .attr("class", "barChart")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // setting data scale
  var colorScale = d3.scaleLog().domain([1, 7443]).range(['lightgray','blue']);
  var logScale = d3.scaleLog().domain([1, 7443]).range([1,2]);

  // sorting data by mean
  var calcMean;
  data.forEach(function(d, i) { calcMean = d.high + d.low; d.mean = (calcMean / 2) });
  data.sort(function(a, b) { return b.mean - a.mean; });

  // scaling axis
  var scaleX = d3.scaleLinear()
      .domain([-10000, d3.max(data, function(d) { return d.high})]).nice()
      .range([0, width]);
  
  var scaleY = d3.scaleBand()
      .domain(data.map(function(d) { return d.Period; }))
      .range([0, height])
      .paddingInner(0.05)
      .align(0.1);

  // adding tooltip
  var tool_tip = d3.tip()
      .attr("class", "d3-tip")
      .style("opacity", 0.5)
      .offset([-8, 0])
      .html(function(d) { return "Period: " + "<strong>" + d.Period + "</strong>" + "<br>" + 
                                 "Total finds: " + "<strong>" + d.Number + "</strong>" + "<br>" +
                                 "Timespan: " + "<strong>" + d.low + "</strong>" + " to " + "<strong>" + d.high + "</strong>" + " BC"; 
  });
  g.call(tool_tip)

  // adding gridlines
  g.append("g")
    .attr("class", "grid")
    .attr("transform", "translate(0," + height + ")")
    .call(make_x_gridlines(scaleX)
      .tickSize(10-height)
      .tickFormat("")
      );

  // adding bars
  g.append("g")
      .attr("class", "bar")
    .selectAll("g")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) { return d.Period; })
      .attr("x", function(d) { return scaleX(d.low); })
      .attr("y", function(d) { return scaleY(d.Period); })
      .attr("height", height/data.length) //function(d) { return logScale(d.Number); })
      .attr("width", function(d) { return scaleX(d.high) - scaleX(d.low); })
      .attr("fill", function(d) { return colorScale(d.Number) })
      .on('mouseover', tool_tip.show)
      .on('mouseout', tool_tip.hide);

  // creating custom x-axis
  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(scaleX).tickValues([-10000,-7000,-3000,-350,-50,500,1500,1800]))
    .selectAll("text")
      .style("text-anchor", "start")
      .attr("dx", ".8em")
      .attr("dy", ".10em")
      .attr("transform", "rotate(45)")
    .append("text")
      .attr("x", width / 2)
      .attr("y", 30)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Year BC/AD");

  // adding title
  g.append("g")
      .attr("class", "title")
    .append("text")
      .attr("x", -10)
      .attr("y", 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "darkblue")
      .attr("font-size", "20px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text("Dating range of finds");
};