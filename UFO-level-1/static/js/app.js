// Everything for app.js in ufo folder 1, all working. Geronimo
// From data.js
var ufoData = data;
var tbody = d3.select("tbody");

// Step 1: Loop through `data` and log each ufo sighting object to the console
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each ufo sighting object
// // Note: this won't add cells or text, just appending the <tr> table tags to the table body
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to log each ufo sighting object to the console
// Still nothing will appear in the table on the live server just yet
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Now we'll create a variable called 'cell' that will append the <td> tags for the table rows
// Table will still be empty (but striped rows); we haven't added the actual data yet
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with ufo sightings values (datetime, city, state, country, shape, durationMinutes, comments)
// ufoData.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// Now make 'Step 5' code into a function called 'renderTable'
function renderTable(arrayofObjects) {
  // Because we'll be appending the table data <td> when filtering later, start the function by emptying the table
  tbody.html("");
    
    // For each object in the given parameter, the function will loop thru each object & create a new & empty <tr> table tag
    arrayofObjects.forEach(object => {
        var row = tbody.append("tr");
        
        // For each object in the data, we'll pull out the value from each key:value pair, and place it into a newly created 'cell'
        Object.values(object).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

renderTable(ufoData);

// Set a reference to the 'Filter Button' in the index.html
var button = d3.select("#filter-btn"); 
button.on("click", handleClick); 
 

// Create a function that tells the table what to do when the 'Filter Button' is clicked
function handleClick() {
  var filteredData = ufoData;
    
  // Set a reference to the input element on the page & pull out the input value
  var userInput = d3.select("input");
  var userDate = userInput.property("value");
  
  // If the user's input is in the table, then set 'filteredData' to the filtered ufo Data
  if (userDate) {
    filteredData = ufoData.filter(object =>
      object.datetime === userDate);
        
    // Put the original placeholder text back in the input field
    d3.select("input").property("value", "");
  }
  // Build new table based on user input
  renderTable(filteredData);  
}
