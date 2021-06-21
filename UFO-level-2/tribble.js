// Appending to table in html
var tableBody = d3.select("tbody");

data.forEach(report => {
    var row = tableBody.append('tr');
    row.append('td').text(report.datetime);
    row.append('td').text(report.city);
    row.append('td').text(report.state);
    row.append('td').text(report.country);
    row.append('td').text(report.shape);
    row.append('td').text(report.durationMinutes);
    row.append('td').text(report.comments);

});

// Creating filters and table updates
allDates = []
data.forEach(report => {
    var date = report.datetime;
    allDates.push(date);
});
var uniqDates = [...new Set(allDates)];
console.log(uniqDates);
uniqDates.forEach(date => {
    var form = d3.select("#date-select");
    form.append('option').attr('value', date).text(date)
});

allCities = []
data.forEach(report => {
    var city = report.city;
    allCities.push(city);
});
var uniqCities = [...new Set(allCities)];
console.log(uniqCities);
uniqCities.forEach(city => {
    var form = d3.select("#city-select");
    form.append('option').attr('value', city).text(city)
});

allStates = []
data.forEach(report => {
    var state = report.state;
    allStates.push(state);
});
var uniqStates = [...new Set(allStates)];
console.log(uniqStates);
uniqStates.forEach(state => {
    var form = d3.select("#state-select");
    form.append('option').attr('value', state).text(state)
});

allCountries = []
data.forEach(report => {
    var country = report.country;
    allCountries.push(country);
});
var uniqCountries = [...new Set(allCountries)];
console.log(uniqCountries);
uniqCountries.forEach(country => {
    var form = d3.select("#country-select");
    form.append('option').attr('value', country).text(country)
});

allShapes = []
data.forEach(report => {
    var date = report.shape;
    allShapes.push(shape);
});
var uniqShapes = [...new Set(allShapes)];
console.log(uniqShapes);
uniqShapes.forEach(shape => {
    var form = d3.select("#shape-select");
    form.append('option').attr('value', shape).text(shape)
});


//Create event function and filters
var filterButton = d3.select("#filter-button");
filterButton.on("click", runEnter);

function runEnter() {
    d3.selectAll('tr').remove();
    var inputDate = d3.select("#date-select").property("value");
    var inputCity = d3.select('#city-select').property("value");
    var inputState = d3.select('#state-select').property("value");
    var inputCountry = d3.select('#country-select').property("value");
    var inputShape = d3.select('#shape-select').property("value");
    var matchingReport = data.filter(report => {
        report.datetime === inputDate &&
        report.city === inputCity &&
        report.state === inputState &&
        report.country === inputCountry &&
        report.shape === inputShape
    });
    matchingReport.forEach(report => {
        var row = tableBody.append('tr');
        row.append('td').text(report.datetime);
        row.append('td').text(report.city);
        row.append('td').text(report.state);
        row.append('td').text(report.country);
        row.append('td').text(report.shape);
        row.append('td').text(report.durationMinutes);
        row.append('td').text(report.comments);
    });
};