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

// change year from dropdown in timeline

function changeYear(i) { 
  year = i 
    d3.json(dataLoc[i], function(error, data) {
    if (error) throw error;
      d3.select("#timeline").selectAll("*").remove();
      timeline(data);
  })
}