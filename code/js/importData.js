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


var periodsCampaign  = {}

d3.csv('data/meta/SLP_total_magled.csv', function(data) {
  
  var byEra = d3.nest().key(function(d) { return d.Era }).entries(data);

  // console.log("1", byEra)

  byEra.forEach(function(d){
    // console.log("2", d);
    periodsCampaign[d.key] = {}
    console.log("before",periodsCampaign)
    var byEra = d3.nest().key(function(e) { return e.Number }).entries(d.values)
    // console.log("3", byEra);
    // byEra.forEach(function(f) {
      periodsCampaign[d.key] = d.values
      // console.log("1", periodsCampaign);
    // })
  })
});

console.log("4", periodsCampaign);

// var data = {};

// d3.csv('data/meta/SLP_total_magled.csv', function(data) {
//     var byEra = d3.nest().key(function(d) { return d.Era }).entries(data);
//     console.log("byEra", byEra);
//     byEra.forEach(function(d) {
//       console.log(d.values.Number[1])

//       data[d.key] = d.values.Number
//     })
// });

// console.log("data", data);