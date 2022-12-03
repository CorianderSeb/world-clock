setInterval(function() {

let dublinElement = document.querySelector("#dublin");
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime= moment().tz("Europe/Dublin");
dublinDateElement.innerHTML = moment().format("MMMM Do YYYY");
dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]"
);
let ashevilleElement = document.querySelector("#asheville");
let ashevilleDateElement = ashevilleElement.querySelector(".date");
let ashevilleTimeElement = ashevilleElement.querySelector(".time");
let ashevilleTime = moment().tz("America/New_York");
ashevilleDateElement.innerHTML = moment().format("MMMM Do YYYY");
ashevilleTimeElement.innerHTML = ashevilleTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);