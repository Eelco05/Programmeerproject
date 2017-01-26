var tool_tip = d3.tip()
    .attr("class", "d3-tip")
    .style("opacity", 0.5)
    .offset([-8, 0])
    .html(function(d) { return "Period: " + d.Period + "<br>" + 
      "Total finds: " + d.Number + "<br>" +
      "Timespan: " + d.low + " to " + d.high + " BC"; 
});