var totType = {};
var totWare = {};
var totEra = {};

d3.csv('data/meta/SLP_total_magled.csv', function(data) {
  
  totWare = d3.nest()
  .key(function(d) { return d.Campaign; })
  .key(function(d) { return d.Type; })
  .rollup(function(e) { return { 
    totNum: d3.sum(e, function(d) { return d.Number; }), 
    totWgt: d3.sum(e, function(d) { return d.Weight; })
    } 
  })
  .map(data);

  console.log(totWare)
});

d3.csv('data/meta/SLP_total_magled.csv', function(data) {
  
  totType = d3.nest()
  .key(function(d) { return d.Campaign; })
  .key(function(d) { return d.Ware; })
  .rollup(function(e) { return { 
    totNum: d3.sum(e, function(d) { return d.Number; }), 
    totWgt: d3.sum(e, function(d) { return d.Weight; })
    } 
  })
  .map(data);

  console.log(totType)
});

d3.csv('data/meta/SLP_total_magled.csv', function(data) {
  
  totEra = d3.nest()
  .key(function(d) { return d.Campaign; })
  .key(function(d) { return d.Era; })
  .rollup(function(e) { return { 
    totNum: d3.sum(e, function(d) { return d.Number; }), 
    totWgt: d3.sum(e, function(d) { return d.Weight; })
    } 
  })
  .map(data);

  console.log(totEra)
});


