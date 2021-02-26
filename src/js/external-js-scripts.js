function externalAlertFunction() {
    alert("Alert button clicked using external import!");
}

function replaceFnOutput(id, text) {
    document.getElementById(id).innerText = text;
}

function replaceFnOutputJQuery(id, text) {
    $("#" + id).text(text);
}