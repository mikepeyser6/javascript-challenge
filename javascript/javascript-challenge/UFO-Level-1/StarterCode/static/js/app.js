// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach(function(selections) {

        console.log(selections);
        var row = tbody.append("tr");
        
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            
            var cell = row.append("td");
            cell.text(value);
        });
    });
    });