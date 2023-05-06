document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;

  var queryString = "";

  if (name !== "") {
    queryString += "name=" + encodeURIComponent(name);
  }

  if (year !== "") {
    if (queryString !== "") {
      queryString += "&";
    }
    queryString += "year=" + encodeURIComponent(year);
  }

  var updatedURL = "https://localhost:8080/";

  if (queryString !== "") {
    updatedURL += "?" + queryString;
  }

  document.getElementById("url").textContent = updatedURL;
});
