// From data.js
var ufoData = data;
// Variable for table body within the index
var tbody = d3.select("tbody");

// A function that will render the data into a table
function renderTable(arrayOfObjects) {
  
  // Empty table before iterating thru 'arrayofObjects'
  tbody.html("");
    
  // Iterate thru each object, create variable 'row' which will add <tr> tags to tbody for each object
    arrayOfObjects.forEach(objectRow => {
        var row = tbody.append("tr");
        
        // Loop thru Object values, create variable 'cell' which will add empty <td> tags for every <tr> tag created above
        Object.values(objectRow).forEach(value => {
            var cell = row.append("td");
            
            // Place values inside of those cells
            cell.text(value);
          });
    });
}

// Call the function to render the table
renderTable(ufoData);

var filter_criteria = {};
// tried creating the filter_criteria object inside of function handleClick, but that doesn't work
// note: if i don't put var infront of filter_criteria inside function (and nix it out here), then it does work.  FYI.

// Locate the button inside index.html and say what happens when it's clicked
var button = d3.select("#filter-btn");
button.on("click", handleClick);

// Function that will create a new ufoObject based on user input
function handleClick() {
  // Create empty object to hold user input
  filter_criteria = {};
  
  // DATE USER INPUT
  // Locate input field
  var dateInput = d3.select("#datetime");
  // Create variable to hold input text
  var dateData = dateInput.property("value");
  // Create variable to hold index.html 'id' for that text
  var dateID = dateInput.attr("id");
  //  If that input field isn't empty, then add that key:value pair to filter_criteria object
  if (dateData != "") {
    filter_criteria[dateID] = dateData;
  }
  
  // CITY USER INPUT
  var cityInput = d3.select("#city");
  var cityData = cityInput.property("value");
  var cityID = cityInput.attr("id");
  if (cityData != "") {
    filter_criteria[cityID] = cityData;
  }
  
  // STATE USER INPUT
  var stateInput = d3.select("#state");
  var stateData = stateInput.property("value");
  var stateID = stateInput.attr("id");
  if (stateData != "") {
    filter_criteria[stateID] = stateData;
  }
  
  // COUNTRY USER INPUT
  var countryInput = d3.select("#country");
  var countryData = countryInput.property("value");
  var countryID = countryInput.attr("id");
  if (countryData != "") {
    filter_criteria[countryID] = countryData;
  }
  
  // SHAPE USER INPUT
  var shapeInput = d3.select("#shape");
  var shapeData = shapeInput.property("value");
  var shapeID = shapeInput.attr("id");
  if (shapeData != "") {
    filter_criteria[shapeID] = shapeData;
  }
  
  // Call function in order to build table based off the new filters
  filterTable();
}

function filterTable() {
  let filteredData = ufoData;
   
  // Loop thru filter_criteria and filter original data where it has a match
  Object.entries(filter_criteria).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });
  
  // Call renderTable function for the newly filtered data
  renderTable(filteredData);
}











