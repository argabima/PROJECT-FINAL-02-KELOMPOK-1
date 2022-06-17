const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(img/jakarta.jpg)'

searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputKeyword.value + "&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

            result.innerHTML = `<h2 style="margin-bottom: 15px; color:black;">Kota/Daerah : ${response.name}, ${response.sys.country}</h2>
                                <br>
                                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp"> <span>&#9729;</span> ${response.weather[0].description}</span> <span class="temp"> <span>&#127787;</span> ${response.main.humidity} %</span></h5>
                                <h5>Conditions : ${response.weather[0].description} </h5>
                                <h5>Temperature : ${response.main.temp}°С </h5>
                                <h5>Wind Speed : ${response.wind.speed * 3.6} km/h</h5>
                                <br>
                                <br>
                                <h4 style="color: black;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>`
                                
        })
    inputKeyword.value = null;

})