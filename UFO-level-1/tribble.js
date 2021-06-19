// Appending to table in html
var tableBody = d3.select("tbody");

console.log(data);

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
