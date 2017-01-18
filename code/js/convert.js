d3.json('data/meta/SLP_total_magled.json', function(data) {

  var type = d3.nest()
  .key(function(d) { return d.Type; })
  .key(function(d) { return "SLP"+d.Campaign.split("-")[1]; })
  .rollup(function(e) { return d3.sum(e, function(d) { return +d.Number; })
    })
  .map(data);

  document.getElementById("json").innerHTML = JSON.stringify(type, undefined, 2);

  console.log("json_type", type)
});
