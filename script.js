const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1588ff3591mshd7f5697a61ea4d4p11fd9cjsnd88e7f2a274f',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};
const getWeather= (city)=>{

    cityName.InnerHtml=city

    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5' +city, options)
	.then(response => 
        response.json())
        .then(response => 
            {
                console.log(response))
                cloud_pct.InnerHtml=response.cloud_pct
                Max_temp.InnerHtml=response.Max_temp
                Min_temp.InnerHtml=response.Min_temp
                Feels_like.InnerHtml=response.Feels_like
                Humidity.InnerHtml=response.Humidity
                Sunrise.InnerHtml=response.Sunrise
                Sunset.InnerHtml=response.Sunset
                Wind_degree.InnerHtml=response.Wind_degree
                Wind_speed.InnerHtml=response.Wind_speed
                
                
            }).catch(err => console.error(err));
            
        } 
        Submit.addEventlistener('click',()=>){
            getWeather(city.value)
            e.preventDefault()

        }
    getWeather('oslo')