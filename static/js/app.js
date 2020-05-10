var tbody = d3.select("tbody");

function renderRows(dataToDisplay) {
  dataToDisplay.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

renderRows(data);

function handleChange(event) {
  d3.event.preventDefault();
  var inputDate = d3.select("#datetime").property("value");
  var tableRows = tbody.selectAll("tr");
  var filteredData = data.filter(sighting => sighting.datetime == inputDate);
  tbody.selectAll("tr").remove();
  renderRows(filteredData);
}

var filterButton = d3.select("#filter-btn")
filterButton.on("click", handleChange);


