// d3.csv('/data/GENDER_EMP1_total.csv', function(data) {
//   var employ  = {}
//   var byYear = d3.nest().key(function(d) { return d.year }).entries(data);

//   // console.log("1", byYear)

//   byYear.forEach(function(d){
//     // console.log(d);
//     employ[d.key] = {}
//     var byCou = d3.nest().key(function(e) { return e.cou }).entries(d.values)
//     // console.log(byCou);

//     byCou.forEach(function(f) {
//       employ[d.key][f.key] = f.values[1]
//     })
//   })


var numberEra  = {}

d3.csv('data/meta/SLP_total_magled.csv', function(data) {
  
  var byEra = d3.nest().key(function(d) { return d.Era }).entries(data);

  // console.log("1", byEra)

  byEra.forEach(function(d){
    // console.log("2", d);
    numberEra[d.key] = {}
    // console.log("before", periodsCampaign)
    var byNumber = d3.nest().key(function(e) { return +e.Number }).entries(d.values)
    // console.log("era", d.values);
    // console.log("Number", byNumber);
    var i = 0;
    byNumber.forEach(function(f) {
      // console.log(d.values)
      // console.log(i);
      numberEra[d.key][f.key] += d.values[i].Number
      i += 1;
      // console.log("1", periodsCampaign);
    })
  })
});

console.log("4", numberEra);