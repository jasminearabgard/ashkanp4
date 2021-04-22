function add(value) {
    document.getElementById("displayResult").value += value;
}

function finalize() {
    document.getElementById("displayResult").value = eval(document.getElementById("displayResult").value);
}

function reset() {
    document.getElementById("displayResult").value = "";
}

function mathCalculator(mathFunc) {
    var val = document.getElementById("displayResult").value;
    document.getElementById("displayResult").value = Math[mathFunc](val);
}