function search() {
    var query = document.getElementById("query").value;
    window.location.href = `https://cse.google.com/cse?cx=2f541d1a0c2da69d4&q=${query}`;
}
function keyCode(event) {
  var x = event.keyCode;
  if (x == 13) {
    var query = document.getElementById("query").value;
    window.location.href = `https://cse.google.com/cse?cx=2f541d1a0c2da69d4&q=${query}`;
  }
}