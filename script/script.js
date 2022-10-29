var row_begin, row_end, col_begin, col_end;

function createTable(row_begin, row_end, col_begin, col_end) {
    var output = "<table><th>&#215;</th>";
    var i, j;

    row_begin = Number(document.getElementById('row_begin').value);
    row_end   = Number(document.getElementById('row_end').value);
    col_begin = Number(document.getElementById('col_begin').value);
    col_end   = Number(document.getElementById('col_end').value);

    if (checkArgs(row_begin, row_end, col_begin, col_end)) {

        for (i = row_begin; i <= row_end; i++) {
            output += "<th>" + i + "</th>";
        }
    
        for (i = col_begin; i <= col_end; i++) {
            output += "<tr>";
            output += "<th>" + i + "</th>";
    
            for (j = row_begin; j <= row_end; j++) {
                
                if (i == j) {
                    output = output + "<td style=\"background-color: #6400c2;\"><span>" + (i * j) + "</span></td>";
                }

                else {
                    output = output + "<td>" + (i * j) + "</td>";
                }
            }
            output += "</tr>";
        }
        output += "</table>";
        document.getElementById('multTab').innerHTML = output;
    }
}

function checkArgs(r1, r2, c1, c2) {
    var message = "<p>";
    var values = [r1, r2, c1, c2];
    var i;

    for (i = 0; i < values.length; i++) {
        if (!isFinite(values[i])) {
            message += "Please only enter numbers."
            document.getElementById("error").innerHTML = message + "</p>";
            return false;
        }
    }

    if (r1 < -50 || r2 > 50 || c1 < -50 || c2 > 50) {
        message += "Please enter a number between -50 and 50."
        document.getElementById("error").innerHTML = message + "</p>";
        return false;
    }

    if (r1 > r2 || c1 > c2) {
        message += "A starting number can't be greater than the ending number.";
        document.getElementById("error").innerHTML = message + "</p>";
        return false;
    }

    document.getElementById("error").innerHTML = "";
    return true;
}
