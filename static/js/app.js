// from data.js

var tableData = data;
console.log(tableData);

// populating table
var tbody = d3.select("tbody");

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// filter function on click
var submit = d3.select("#filter-btn");
submit.on("click", function() {

// Preventing the page from refreshing
d3.event.preventDefault();

// clear the table
d3.select("tbody").selectAll("*").remove();

// Selecting the input element and getting the value
var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("value");

// matching the input value with data
var filteredData = tableData.filter(data => data.datetime === inputValue);

console.log(filteredData);
// inputs the filtered data into the table
    filteredData.forEach(function(obj){
        var rows = tbody.append("tr");
        Object.keys(obj).forEach(function(key){
            rows.append("td").text(obj[key]);
        })
    })
});
