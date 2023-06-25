// Using JQuery to obtain the elements from the index.html file
let searchForm = $('#search-form');
let currentCity = $('#current-city');
let currentDate = $('#current-date');
let currentWeatherIcon = $('#current-weather-icon');
let currentTemp = $('#current-temp');
let currentWindSpeed = $('#current-wind-speed');
let currentHumidity = $('#current-humidity');

// Created a function to obtain the current date
function obtainDate(){
    var today = dayjs();
    currentDate.text(today.format('dddd MMMM DD, YYYY'));
}
// Call to function
obtainDate();

// Created a function to get the weather data
function getWeather(event) {
    event.preventDefault();

    let APIkey = "56dbff74c0ac3fba85a5a517abf01ddb";
    let searchCity = $('#search-city');
    let inputValue = searchCity.val();
    console.log(searchCity);

    // the URL where the API call will be made
    let requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + inputValue + '&limit=1&appid=' + APIkey + '&units=imperial';
    console.log(requestUrl);
  
    // fetching the data
    fetch(requestUrl)
      .then(function (response) {
        console.log("response", response)
        return response.json();
      })
      .then(function (data) {
        console.log("data", data)

        currentCity.text(data.city.name);
        currentWeatherIcon.text(data.list[0].weather[0].icon);
        currentTemp.text(data.list[0].main.temp);
        currentWindSpeed.text(data.list[0].wind.speed);
        currentHumidity.text(data.list[0].main.humidity);

        // Call to function and pass the data
        fiveDayForecast(data);
      });
}

// Gets the five day forecast and renders the data
function fiveDayForecast(data){
    var today = dayjs();

    for(let i=1; i<=5; i++){
        let day = i;

        if (day == 1){
            let forecastDay = $('#day-1');
            let weatherIcon = $('#weather-icon1');
            let temp = $('#temp1');
            let windSpeed = $('#wind-speed1');
            let humidity = $('#humidity1');

            let date = today.add(i, 'day')
            forecastDay.text(date.format('MM/DD/YYYY'));

            weatherIcon.text(data.list[i].weather[0].icon);
            temp.text(data.list[i].main.temp);
            windSpeed.text(data.list[i].wind.speed);
            humidity.text(data.list[i].main.humidity);
        }
        if (day == 2){
            let forecastDay = $('#day-2');
            let weatherIcon = $('#weather-icon2');
            let temp = $('#temp2');
            let windSpeed = $('#wind-speed2');
            let humidity = $('#humidity2');

            let date = today.add(i, 'day')
            forecastDay.text(date.format('MM/DD/YYYY'));

            weatherIcon.text(data.list[i].weather[0].icon);
            temp.text(data.list[i].main.temp);
            windSpeed.text(data.list[i].wind.speed);
            humidity.text(data.list[i].main.humidity);
        }
        if (day == 3){
            let forecastDay = $('#day-3');
            let weatherIcon = $('#weather-icon3');
            let temp = $('#temp3');
            let windSpeed = $('#wind-speed3');
            let humidity = $('#humidity3');

            let date = today.add(i, 'day')
            forecastDay.text(date.format('MM/DD/YYYY'));

            weatherIcon.text(data.list[i].weather[0].icon);
            temp.text(data.list[i].main.temp);
            windSpeed.text(data.list[i].wind.speed);
            humidity.text(data.list[i].main.humidity);
        }
        if (day == 4){
            let forecastDay = $('#day-4');
            let weatherIcon = $('#weather-icon4');
            let temp = $('#temp4');
            let windSpeed = $('#wind-speed4');
            let humidity = $('#humidity4');

            let date = today.add(i, 'day')
            forecastDay.text(date.format('MM/DD/YYYY'));

            weatherIcon.text(data.list[i].weather[0].icon);
            temp.text(data.list[i].main.temp);
            windSpeed.text(data.list[i].wind.speed);
            humidity.text(data.list[i].main.humidity);
        }
        if (day == 5){
            let forecastDay = $('#day-5');
            let weatherIcon = $('#weather-icon5');
            let temp = $('#temp5');
            let windSpeed = $('#wind-speed5');
            let humidity = $('#humidity5');

            let date = today.add(i, 'day')
            forecastDay.text(date.format('MM/DD/YYYY'));

            weatherIcon.text(data.list[i].weather[0].icon);
            temp.text(data.list[i].main.temp);
            windSpeed.text(data.list[i].wind.speed);
            humidity.text(data.list[i].main.humidity);
        }
        
    }
}

searchForm.on('submit', getWeather);
