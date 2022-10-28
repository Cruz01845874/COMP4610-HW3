var row_begin, row_end, col_begin, col_end;

function createTable(row_begin, row_end, col_begin, col_end) {
    var output = "<table>";
    var message = "Please enter a number between -50 and 50."
    var i, j;

    row_begin = Number(document.getElementById('row_begin').value);
    row_end   = Number(document.getElementById('row_end').value);
    col_begin = Number(document.getElementById('col_begin').value);
    col_end   = Number(document.getElementById('col_end').value);

    if (row_begin < -50 || row_end > 50 || col_begin < -50 || col_end > 50) {
        document.getElementById("error").innerHTML = message;
        return;
    }

    for (i = row_begin; i <= row_end; i++) {
        output += "<tr>";

        for (j = col_begin; j <= col_end; j++) {

            output = output + "<td>" + (i * j) + "</td>";
        }

        output += "</tr>";
    }

    output += "</table>";
    document.getElementById('multTab').innerHTML = output;
}

