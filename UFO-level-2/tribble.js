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
    var form = d3.select("#form-select");
    form.append('option').attr('value', date).text(date)
});

var dateSelect = d3.select("#form-select");
dateSelect.on("input", runEnter);

function runEnter() {
    d3.selectAll('tr').remove();
    var inputValue = d3.select("#form-select").property("value");
    var matchingDate = data.filter(report => report.datetime === inputValue);
    matchingDate.forEach(report => {
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