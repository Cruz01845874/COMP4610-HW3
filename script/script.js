var row_begin, row_end, col_begin, col_end;

function createTable() {
    var output = "<table>";
    var i, j;

    row_begin = document.getElementById('row_begin').value;
    row_end   = document.getElementById('row_end').value;
    col_begin = document.getElementById('col_begin').value;
    col_end   = document.getElementById('col_end').value;

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

