// Appending to table in html
var tableBody = d3.select("tbody");

function runReset() {
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
};

runReset();

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
    var shape = report.shape;
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

var resetButton = d3.select("#reset-button");
resetButton.on("click", runReset);

function runEnter() {
    d3.selectAll('tr').remove();
    var inputs = [];
    var inputDate = d3.select("#date-select").property("value");
    var inputCity = d3.select('#city-select').property("value");
    var inputState = d3.select('#state-select').property("value");
    var inputCountry = d3.select('#country-select').property("value");
    var inputShape = d3.select('#shape-select').property("value");
    var defaultSelect = /Select a*/;
    var matchingReport = data
        .filter(report => {
            if (defaultSelect.test(inputDate) !== true) {
                return report.datetime === inputDate
            }
            else {return report.datetime === report.datetime}
        })
        .filter(report => {
            if (defaultSelect.test(inputCity) !== true) {
                return report.city === inputCity
            }
            else {return report.city === report.city}
        })
        .filter(report => {
            if (defaultSelect.test(inputState) !== true) {
                return report.state === inputState
            }
            else {return report.state === report.state}
        })
        .filter(report => {
            if (defaultSelect.test(inputCountry) !== true) {
                return report.country === inputCountry
            }
            else {return report.country === report.country}
        })
        .filter(report => {
            if (defaultSelect.test(inputShape) !== true) {
                return report.shape === inputShape
            }
            else {return report.shape === report.shape}
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

