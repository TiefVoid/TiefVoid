function sortTable(n, dir) {
    const table = document.getElementById("sortableTable");
    let rows = Array.from(table.rows).slice(1); // Exclude header row
    const isAscending = dir === "asc";

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[n].textContent.toLowerCase();
        const cellB = rowB.cells[n].textContent.toLowerCase();
        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    rows.forEach(row => table.tBodies[0].appendChild(row));
}