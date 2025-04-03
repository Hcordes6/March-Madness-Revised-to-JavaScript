// This Implementation is incorrect.


fetch("C:\\Users\\hcord\\OneDrive\\Desktop\\Personal Projects Folder\\March Madness Project Folder\\FINAL March madness stats - Sheet1.csv")
    .then(response => response.text())
    .then(csvText => {
        console.log(csvText); // Display raw CSV content
        parseCSV(csvText);
    })
    .catch(error => console.error("Error loading CSV:", error));

function parseCSV(csvText) {
    const rows = csvText.split("\n").map(row => row.split(","));
    rows.shift(); // Remove header
    console.log(rows); // Displays parsed CSV data
}
