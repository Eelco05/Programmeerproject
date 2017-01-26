function histoGram(fD){
    var hG={},    hGDim = {t: 70, r: 0, b: 30, l: 0};
    hGDim.w = 650 - hGDim.l - hGDim.r,
    hGDim.h = 400 - hGDim.t - hGDim.b;

    //create svg for histogram.
    var hGsvg = d3.select(id).append("svg")
        .attr("width", hGDim.w + hGDim.l + hGDim.r)
        .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
        .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");

    // create function for x-axis mapping.
    var x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.1)
            .domain(fD.map(function(d) { return d[0]; }));

    // Add x-axis to the histogram svg.
    hGsvg.append("g").attr("class", "x axis")
        .attr("transform", "translate(0," + hGDim.h + ")")
        .call(d3.svg.axis().scale(x).orient("bottom"));

    // Create function for y-axis map.
    var y = d3.scale.linear().range([hGDim.h, 0])
            .domain([0, d3.max(fD, function(d) { return d[1]; })]);

    // Create bars for histogram to contain rectangles and freq labels.
    var bars = hGsvg.selectAll(".bar").data(fD).enter()
            .append("g").attr("class", "bar");

    var tool_tip_dash = d3.tip()
      .attr("class", "d3-tip")
      .style("opacity", 0.5)
      .offset([-8, 0])
      .html(function(d) { return "Period: " + d.find + "<br>" + 
        "Total finds: " + d.total + "<br>" +
        "Timespan: " + d.low + " to " + d.high + " BC"; 
    });  
    //create the rectangles.
    bars.append("rect")
        .attr("x", function(d) { return x(d[0]); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("width", x.rangeBand())
        .attr("height", function(d) { return hGDim.h - y(d[1]); })
        .attr('fill',barColor)
        .on("mouseover",mouseover)// mouseover is defined below.
        .on("mouseout",mouseout)// mouseout is defined below.
        .on('mouseover', tool_tip_dash.show)
        .on('mouseout', tool_tip_dash.hide);  

    //Create the frequency labels above the rectangles.
    bars.append("text").text(function(d){ return d3.format(",")(d[1])})
        .attr("x", function(d) { return x(d[0])+x.rangeBand()/2; })
        .attr("y", function(d) { return y(d[1])-5; })
        .attr("text-anchor", "middle");

    bars.call(tool_tip_dash)
};