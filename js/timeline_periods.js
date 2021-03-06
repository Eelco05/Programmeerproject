
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

// based on the work of Justin Freels at http://bl.ocks.org/jfreels/6734025

d3.csv('data/periods_timescale.csv', function (error,data) {

	// main function
  	function tabulate(data, columns) {

  		// creating table
		var table = d3.select('#timeline_legend').append('table');
			thead = table.append('thead')
			tbody = table.append('tbody');

		// append the header row
		thead.append('tr')
		  .selectAll('th')
		  .data(columns).enter()
		  .append('th')
		    .text(function (column) { return column; });

		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		  .data(function (row) {
		    return columns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
		  })
		  .enter().append('td')
		    .text(function (d) { return d.value; });

	  return table;
	}
	// render the table(s)
	tabulate(data, ['Shorthand', 'Period', 'Timescale']); // 2 column table
	colorLegend(data);
});