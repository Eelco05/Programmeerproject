
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

var obj = [
   {find:"STO",year:{SLP2004:31,SLP2005:71,SLP2008:0}}
   ,{find:"GLA",year:{SLP2004:7,SLP2005:2,SLP2008:0}}
  //  ,{find:"CER",year:{SLP2004:12767,SLP2005:10646,SLP2008:382}}
   ,{find:"MET",year:{SLP2004:9,SLP2005:1,SLP2008:0}}
   ,{find:"SHE",year:{SLP2004:1,SLP2005:0,SLP2008:0}}
   ,{find:"VAR",year:{SLP2004:0,SLP2005:13,SLP2008:0}}
];

var ware = [
  {"find":"ARCH","year":{"SLP2004":12,"SLP2005":0,"SLP2008":0}},
  {"find":"ARS","year":{"SLP2004":39,"SLP2005":27,"SLP2008":0}},
  {"find":"AU","year":{"SLP2004":7,"SLP2005":4,"SLP2008":0}},
  {"find":"BG","year":{"SLP2004":134,"SLP2005":120,"SLP2008":0}},
  {"find":"CC","year":{"SLP2004":193,"SLP2005":10,"SLP2008":0}},
  {"find":"CKW","year":{"SLP2004":8,"SLP2005":0,"SLP2008":0}},
  {"find":"CP","year":{"SLP2004":34,"SLP2005":5,"SLP2008":0}},
  {"find":"CW","year":{"SLP2004":2301,"SLP2005":6,"SLP2008":116}},
  {"find":"CW1","year":{"SLP2004":237,"SLP2005":1724,"SLP2008":0}},
  {"find":"CW2","year":{"SLP2004":124,"SLP2005":621,"SLP2008":0}},
  {"find":"DO","year":{"SLP2004":22,"SLP2005":0,"SLP2008":1}},
  {"find":"DO1","year":{"SLP2004":53,"SLP2005":54,"SLP2008":0}},
  {"find":"DO2","year":{"SLP2004":39,"SLP2005":24,"SLP2008":0}},
  {"find":"GL","year":{"SLP2004":74,"SLP2005":312,"SLP2008":22}},
  {"find":"IMB","year":{"SLP2004":835,"SLP2005":142,"SLP2008":3}},
  {"find":"IMC","year":{"SLP2004":15,"SLP2005":0,"SLP2008":0}},
  {"find":"IMP","year":{"SLP2004":815,"SLP2005":371,"SLP2008":0}},
  {"find":"ITS","year":{"SLP2004":4,"SLP2005":19,"SLP2008":0}},
  {"find":"LW","year":{"SLP2004":7,"SLP2005":3,"SLP2008":0}},
  {"find":"MS","year":{"SLP2004":5,"SLP2005":0,"SLP2008":0}},
  {"find":"OC","year":{"SLP2004":15,"SLP2005":0,"SLP2008":0}},
  {"find":"PS","year":{"SLP2004":8,"SLP2005":0,"SLP2008":0}},
  {"find":"PW","year":{"SLP2004":792,"SLP2005":571,"SLP2008":4}},
  {"find":"RBT","year":{"SLP2004":29,"SLP2005":143,"SLP2008":27}},
  {"find":"RTW","year":{"SLP2004":2,"SLP2005":10,"SLP2008":0}},
  {"find":"STR","year":{"SLP2004":14,"SLP2005":1,"SLP2008":0}},
  {"find":"STV","year":{"SLP2004":52,"SLP2005":0,"SLP2008":0}},
  {"find":"SV","year":{"SLP2004":6,"SLP2005":0,"SLP2008":0}},
  {"find":"TIL","year":{"SLP2004":3569,"SLP2005":1301,"SLP2008":10}},
  // {"find":"UNI","year":{"SLP2004":3276,"SLP2005":4881,"SLP2008":0}},
  {"find":"WAS","year":{"SLP2004":26,"SLP2005":0,"SLP2008":0}},
  {"find":"FLI","year":{"SLP2004":0,"SLP2005":31,"SLP2008":0}},
  {"find":"UN","year":{"SLP2004":0,"SLP2005":293,"SLP2008":180}},
  {"find":"BT","year":{"SLP2004":0,"SLP2005":0,"SLP2008":19}}
];

console.log(ware)
var dash = d3.select('#dashboard')
var check = 0;

function change() {
  if (check == 0) {
    artefact = obj;
    dash.selectAll("*").remove();
    // console.log("check 0", artefact);
    dashboard('#dashboard', obj);
    check = 1; 
  }
  else {
    artefact = ware;
    dash.selectAll("*").remove(); 
    dashboard('#dashboard', artefact);
    // console.log("check 1", artefact);
    check = 0;
  } 
};

var grBl = d3.scale.linear().range([0,2]).domain(["blue", "green"])


console.log(grBl(1));

function segColor(c){ return {SLP2004:"#41b6c4",SLP2005:"#7fcdbb",SLP2008:"#c7e9b4"}[c]; }

d3.json("data/finds_type.json", function(data) {
  console.log("json", data);
  dashboard('#dashboard', ware);
})

function dashboard(id, fData){

    var barColor = 'steelblue';
    

    // compute total for each state.
    fData.forEach(function(d){
        d.total=d.year.SLP2004+d.year.SLP2005+d.year.SLP2008;
    });

    fData.sort(function(a, b) { return b.total - a.total; });

    // function to handle histogram.
    function histoGram(fD){
        var hG={},    hGDim = {t: 40, r: 10, b: 40, l: 10};
        hGDim.w = 700 - hGDim.l - hGDim.r,
        hGDim.h = 350 - hGDim.t - hGDim.b;

        //create svg for histogram.
        var hGsvg = d3.select(id).append("svg")
            .attr("class", "histogram")
            .attr("width", hGDim.w + hGDim.l + hGDim.r)
            .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
            .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");

        // create function for x-axis mapping.
        var x = d3.scale.ordinal()
            .rangeRoundBands([0, hGDim.w], 0.1)
            .domain(fD.map(function(d) { return d[0]; }));

        // Add x-axis to the histogram svg.
        hGsvg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + hGDim.h + ")")
            .call(d3.svg.axis().scale(x).orient("bottom"))
            .selectAll("text")
              .style("text-anchor", "start")
              .attr("dx", ".8em")
              .attr("dy", ".10em")
              .attr("transform", "rotate(45)")

        // Create function for y-axis map.
        var y = d3.scale.linear()
              .range([hGDim.h, 0])
              .domain([0, d3.max(fD, function(d) { return d[1]; })]);

        // Create bars for histogram to contain rectangles and freq labels.
        var bars = hGsvg.selectAll(".bar")
            .data(fD).enter()
              .append("g").attr("class", "bar");
 
        //create the rectangles.
        bars.append("rect")
            .attr("x", function(d) { return x(d[0]); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("width", x.rangeBand())
            .attr("height", function(d) { return hGDim.h - y(d[1]); })
            .attr('fill',barColor)
            .on("mouseover",mouseover)// mouseover is defined below.
            .on("mouseout",mouseout);// mouseout is defined below. 

        //Create the frequency labels above the rectangles.
        bars.append("text").text(function(d){ return d3.format(",")(d[1])})
            .attr("x", function(d) { return x(d[0])+x.rangeBand()/2; })
            .attr("y", function(d) { return y(d[1])-5; })
            .attr("text-anchor", "middle")
            .style("font-size", "11");

        // bars.select("#dashboard")
        //   .select("rect")
        //   .data(fD.sort(function(a, b){return b-a}))

        function mouseover(d){  // utility function to be called on mouseover.
            // filter for selected state.
            var st = fData.filter(function(s){ return s.find == d[0];})[0],
                nD = d3.keys(st.year).map(function(s){ return {type:s, freq:st.year[s]};});

            // call update functions of pie-chart and legend.
            pC.update(nD);
            leg.update(nD);
        }

        function mouseout(d){    // utility function to be called on mouseout.
            // reset the pie-chart and legend.
            pC.update(tF);
            leg.update(tF);
        }

        // create function to update the bars. This will be used by pie-chart.
        hG.update = function(nD, color){
            // update the domain of the y-axis map to reflect change in frequencies.
            y.domain([0, d3.max(nD, function(d) { return d[1]; })]);

            // Attach the new data to the bars.
            var bars = hGsvg.selectAll(".bar").data(nD);

            // transition the height and color of rectangles.
            bars.select("rect").transition().duration(500)
                .attr("y", function(d) {return y(d[1]); })
                .attr("height", function(d) { return hGDim.h - y(d[1]); })
                .attr("fill", color);

            // transition the frequency labels location and change value.
            bars.select("text").transition().duration(500)
                .text(function(d){ return d3.format(",")(d[1])})
                .attr("y", function(d) {return y(d[1])-5; });
        }
        return hG;
    }

    // function to handle pieChart.
    function pieChart(pD){
        var pC ={},    pieDim ={w:225, h: 350};
        pieDim.r = Math.min(pieDim.w, pieDim.h) / 2;

        // create svg for pie chart.
        var piesvg = d3.select(id).append("svg")
            .attr("class", "pie")
            .attr("width", pieDim.w).attr("height", pieDim.h).append("g")
            .attr("transform", "translate("+pieDim.w/2+","+pieDim.h/2+")");

        // create function to draw the arcs of the pie slices.
        var arc = d3.svg.arc()
          .outerRadius(pieDim.r - 10)
          .innerRadius(0);

        // create a function to compute the pie slice angles.
        var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.freq; });

        // Draw the pie slices.
        piesvg.selectAll("path")
          .data(pie(pD))
          .enter().append("path")
            .attr("d", arc)
            .each(function(d) { this._current = d; })
            .style("fill", function(d) { return segColor(d.data.type); })
            .on("mouseover",mouseover)
            .on("mouseout",mouseout);

        d3.select(".pie").append("g")
          .append("text")
            .attr("x", 32)
            .attr("y", 30)
            .attr("dy", "0.32em")
            .attr("fill", "black")
            .attr("font-size", "20px")
            .attr("font-weight", "bold")
            .text("Campaign years");


        // create function to update pie-chart. This will be used by histogram.
        pC.update = function(nD){
            piesvg.selectAll("path")
            .data(pie(nD))
                .transition().duration(500)
                .attrTween("d", arcTween);
        }
        // Utility function to be called on mouseover a pie slice.
        function mouseover(d){
            // call the update function of histogram with new data.
            hG.update(fData.map(function(v){
                return [v.find,v.year[d.data.type]];}),segColor(d.data.type));
        }
        //Utility function to be called on mouseout a pie slice.
        function mouseout(d){
            // call the update function of histogram with all data.
            hG.update(fData.map(function(v){
                return [v.find,v.total];}), barColor);
        }
        // Animating the pie-slice requiring a custom function which specifies
        // how the intermediate paths should be drawn.
        function arcTween(a) {
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t) { return arc(i(t));    };
        }
        return pC;
    }

    // function to handle legend.
    function legend(lD){
        var leg = {};

        // create table for legend.
        var legend = d3.select(id)
          .append("table")
            .attr('class','legend');

        // create one row per segment.
        var tr = legend.append("tbody")
          .selectAll("tr")
          .data(lD)
          .enter().append("tr");

        // create the first column for each segment.
        tr.append("td").append("svg")
            .attr("class", "legend")
            .attr("width", '12')
            .attr("height", '12')
          .append("rect")
            .attr("width", '12')
            .attr("height", '12')
            .attr("fill",function(d){ return segColor(d.type); })

        // create the second column for each segment.
        tr.append("td")
          .text(function(d){ return d.type;});

        // create the third column for each segment.
        tr.append("td")
            .attr("class",'legendFreq')
            .text(function(d){ return d3.format(",")(d.freq);});

        // create the fourth column for each segment.
        tr.append("td")
            .attr("class",'legendPerc')
            .text(function(d){ return getLegend(d,lD);});

        // Utility function to be used to update the legend.
        leg.update = function(nD){
            // update the data attached to the row elements.
            var l = legend.select("tbody")
            .selectAll("tr")
            .data(nD);

            // update the frequencies.
            l.select(".legendFreq")
            .text(function(d){ return d3.format(",")(d.freq);});

            // update the percentage column.
            l.select(".legendPerc")
            .text(function(d){ return getLegend(d,nD);});
        }

        function getLegend(d,aD){ // Utility function to compute percentage.
            return d3.format(".0%")(d.freq/d3.sum(aD.map(function(v){ return v.freq; })));
        }

        return leg;
    }

    var legName = ["Sites visited in 2004", "Sites visited in 2005", "Sites visited in 2008"]

    // calculate total frequency by segment for all state.
    var tF = ['SLP2004','SLP2005','SLP2008'].map(function(d){
        return {type:d, freq: d3.sum(fData.map(function(t){ return t.year[d];}))};
    });

    // calculate total frequency by state for all segment.
    var sF = fData.map(function(d){return [d.find,d.total];});

    var pC = pieChart(tF), // create the pie-chart.
        hG = histoGram(sF), // create the histogram.
        leg= legend(tF);  // create the legend.
}
