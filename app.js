// from data.js
var tableData = data;

// YOUR CODE HERE!

datatable = data;

//INITIALIZE SCREEN WITH DEFAULT TABLE

var filteredData = datatable;

//INITIALIZE DATE DROPDOWN MENU

var datesarray = [];

//GET DATES FROM DATA - MAKE SURE DATE IS UNIQUE IN ARRAY
for (var i=0; i<data.length; i++){
    if (datesarray.includes(data[i].datetime)){
        console.log("Already in dates array");
    }
    else{
        datesarray.push(data[i].datetime);
    }
};

//SORT DATES ARRAY
//datesarray.sort(function(a, b){
//    if(a < b) { return -1; }
//    if(a > b) { return 1; }
//    return 0;
//})

// CREATE OPTIONS FOR SELECTION FORM WITH DATES
var tdates = d3.select("#exampleFormControlSelect3");
tdates.html("");
var row3 = tdates.append('option').text("All");
datesarray.forEach(function(d){
    row3 = tdates.append('option').text(d);
})

//INITIALIZE COUNTRY DROPDOWN MENU

var countryarray = [];

//GET COUNTRY FROM DATA - MAKE SURE COUNTRY IS UNIQUE IN ARRAY
for (var i=0; i<data.length; i++){
    if (countryarray.includes(data[i].country)){
        console.log("Already in country array");
    }
    else{
        countryarray.push(data[i].country);
    }
};

//SORT COUNTRY ARRAY
countryarray.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})

// CREATE OPTIONS FOR SELECTION FORM WITH DATES
var tcountries = d3.select("#exampleFormControlSelect1");
tcountries.html("");
var row1 = tcountries.append('option').text("All");
countryarray.forEach(function(c){
    row1 = tcountries.append('option').text(c);
})


//INITIALIZE CITIES FOR DROPDOWN FORM

var citiesarray = [];

//GET CITIES FROM DATA - MAKE SURE CITY IS UNIQUE IN ARRAY (DO NOT REPEAT CITIES)
for (var i=0; i<data.length; i++){
    if (citiesarray.includes(data[i].city)){
        console.log("Already in cities array");
    }
    else{
        citiesarray.push(data[i].city);
    }
};

//SORT CITIES ARRAY
citiesarray.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})

// CREATE OPTIONS FOR SELECTION FORM WITH CITIES
var tcities = d3.select("#exampleFormControlSelect4");
tcities.html("");
var row4 = tcities.append('option').text("All");
citiesarray.forEach(function(c){
    row4 = tcities.append('option').text(c);
})

//INITIALIZE STATES FOR DROPDOWN FORM

var statesarray = [];

//GET STATES FROM DATA - MAKE SURE STATE IS UNIQUE IN ARRAY (DO NOT REPEAT CITIES)
for (var i=0; i<data.length; i++){
    if (statesarray.includes(data[i].state)){
        console.log("Already in states array");
    }
    else{
        statesarray.push(data[i].state);
    }
};

//ORDER STATES IN ALPHABETICAL ORDER
statesarray.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})

//CREATE OPTIONS FOR FORM IN HTML (FOR STAES)
var tstates = d3.select("#exampleFormControlSelect2");
tstates.html("");
var row2 = tstates.append('option').text("All");

statesarray.forEach(function(s) {
    row2 = tstates.append('option').text(s);
});    

//INITIALIZE SHAPES FOR DROPDOWN FORM

var shapesarray = [];

//GET SHAPES FROM DATA - MAKE SURE SHAPE IS UNIQUE IN ARRAY (DO NOT REPEAT CITIES)
for (var i=0; i<data.length; i++){
    if (shapesarray.includes(data[i].shape)){
        console.log("Already in shape array");
    }
    else{
        shapesarray.push(data[i].shape);
    }
};

//ORDER STATES IN ALPHABETICAL ORDER
shapesarray.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})

//CREATE OPTIONS FOR FORM IN HTML (FOR STAES)
var tshapes = d3.select("#exampleFormControlSelect5");
tshapes.html("");
var row5 = tshapes.append('option').text("All");

shapesarray.forEach(function(s) {
    row5 = tshapes.append('option').text(s);
});    


//Display number of records in Array after filtering data
console.log("NUMBER OF ENTRIES ",filteredData.length);

//Select tbody
var tbody = d3.select("tbody");

//Update list of record in table in the webpage
filteredData.forEach(function(dat1) {
    
    var row = tbody.append('tr');

    Object.entries(dat1).forEach(function([key, value]){
        console.log(key, value);
        row.append("td").text(value);
    });
});    

// Select the button
var button = d3.select("#filter-btn");

// Wait of Click on button action
button.on("click", function() {

    datatable = data;

    // Read date in input field
    var inputDate1 = d3.select("#exampleFormControlSelect3");
    var inputDate = inputDate1.property("value");

    console.log("DATE *****",inputDate);

    //Filter data based on date entered
    if (inputDate === "All"){
        filteredData1 = datatable;
    }
    else{
        filteredData1 = datatable.filter(dat => dat.datetime === inputDate);
    }
    
    //Read state from form
    var inputState = d3.select("#exampleFormControlSelect2");
    var state = inputState.property("value");

    console.log("STATE **** ", state);

    //Filter data based on City entered
    if (state === "All"){
        var filteredData2 = filteredData1;
    }
    else {
        var filteredData2 = filteredData1.filter(dat => dat.state === state);
    }
    
    console.log(filteredData2.length);

    // Read country selection from form

    var countryinput = d3.select("#exampleFormControlSelect1");
    var country = countryinput.property("value");

    console.log("COUNTRY SELECTION *********************", country);
  
    if (country === "All"){
        filteredData3 = filteredData2;
    }
    else{
        filteredData3 = filteredData2.filter(dat =>dat.country === country);
    }

    var cityinput = d3.select("#exampleFormControlSelect4");
    var city = cityinput.property("value");

    console.log("COUNTRY SELECTION *********************", city);
  
    if (city === "All"){
        filteredData4 = filteredData3;
    }
    else{
        filteredData4 = filteredData3.filter(dat =>dat.city === city);
    };

    var shapeinput = d3.select("#exampleFormControlSelect5");
    var shape = shapeinput.property("value");

    console.log("COUNTRY SELECTION *********************", city);
  
    if (shape === "All"){
        filteredData = filteredData4;
    }
    else{
        filteredData = filteredData4.filter(dat =>dat.shape === shape);
    };

    var tbody = d3.select("tbody");
    tbody.html("");
    //tbody.select("#ufo-table tr>td").remove();
    //$("#tblbody").html("");

    filteredData.forEach(function(dat1) {
        
        var row = tbody.append('tr');
    
        Object.entries(dat1).forEach(function([key, value]){
            console.log(key, value);
            row.append("td").text(value);
        });
    });    

});

