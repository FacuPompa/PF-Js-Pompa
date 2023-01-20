const APIKEY = '0dac6c8cdee5ce567a419835fb6d5e22'

const form = document.getElementById('form')
const inputSearch = document.getElementById('search')
const main = document.getElementById('main')

const getWeatherByCity = async (city, apikey) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        console.log(response);
        if (response.status === 404) {
            Toastify ({
                text: 'La ciudad no fue encontrada',
                duration: 3000,
                style: {
                     background:'#EEEEEE',

                }
            }).showToast()
        }
        const data = await response.json()
        showWeather(data)
        } catch (error) {
            console.log(error);
        }
    };
    

const showWeather = (data) => {
    const temp = getCelsius(data.main.temp)
    const div = document.createElement('div')
    div.classList.add('weather')

    div.innerHTML = `
    <h2 class="text-white">
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    </h2>
    <small class="text-white">${data.weather[0].main}</small>
    `
    main.innerHTML = ''
    main.appendChild(div)
};

const getCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15)
};

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const city = inputSearch.value
    if (city) {
        getWeatherByCity(city, APIKEY)
    }
})