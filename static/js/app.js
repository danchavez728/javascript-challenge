// UFO Sightings - Javascript

// select tbody

tbody = d3.select("tbody");

// From data.js

var tableData = data;

// function to build table 

function buildTable(data) {

    // clear prior data 
    tbody.html("");

    // loop through all data rows 
    data.forEach((dataRow) => {

        // append to body 
        var row = tbody.append("tr");

        // object values 
        Object.values(dataRow).forEach((value) => {

            // append single cell for each ufo sighting 
            var cell = row.append("td");
            cell.text(value);
        });
    })
}

// function when clicking button 

function handleClick() {

    // stop page from refreshing

    d3.event.preventDefault();

    // html intput and get property value 

    var date = d3.select("#datetime").property("value");
    var filteredData = tableData;


    // if statement to filter data 

    if (date) {

        filteredData = filteredData.filter((row) => row.datetime === date);
    }


    // function to build table with filter data 
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);


buildTable(tableData);