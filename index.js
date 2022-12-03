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

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1]
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
            <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div> 
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div>
    `;
}
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change",updateCity);