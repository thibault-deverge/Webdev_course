const req = new XMLHttpRequest();

req.onload = function() {
    const data = JSON.parse(this.responseText);
    console.log("IT loaded");
    console.log(data.name, data.height);
}

req.onerror = function() {
    console.log("ERROR!!!");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();