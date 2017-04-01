const form = document.getElementById('weather');



form.addEventListener('submit' , (e) => {

	e.preventDefault();

	let city = document.getElementById('city').value;
	let country = document.getElementById('country').value;
	   const url_loc = `http://locationiq.org/v1/search.php?key=9c002383d3b4d3a0de2c&format=json&city=${city}&country=${country}`;

	fetch(`${url_loc}`)
	   .then((resp) => resp.json())
	   .then(function(json) {

			let latitude = json[0].lat ;
	   		let longitude = json[0].lon;
	   		console.log(latitude);
	   		console.log(longitude) ;

             let display = document.getElementById('display');
             display.innerHTML="";


    	const url_weather = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=0b842d08f8796d1b29a28529cab6f67e&units=metric`;


             
             console.log(url_weather);
             fetch(`${url_weather}`)


    		 
    		.then((resp) => resp.json())


	   		.then(function(json){

                
                console.log(json);
                for(let i=0 ; i<json.list.length ; i+=8)
                {

                  let time = document.createElement('h2');
                  let date = json.list[i].dt_txt;
                  time.textContent = date;
                  display.appendChild(time);

                   let image = document.createElement('img');
                  let icon = json.list[i].weather[0].icon;

                  image.setAttribute('src','weather_icons/'+icon+'.png')

                  display.appendChild(image);

                  let temperature = document.createElement('p');
                  let temp = 'temperature = ' +json.list[i].main.temp;
                  temperature.textContent = temp ;
                  display.appendChild(temperature);

                 

                  let humidity = document.createElement('p');
                  let humid ='humidity = ' +json.list[i].main.humidity+'%';
                  humidity.textContent = humid ;
                  display.appendChild(humidity);
                  
                }







                
       //          let temp =json.main.temp;
       //          list.textContent = temp;;
       //          display.appendChild(list);


	   			// let pressure = json.main.pressure;
	   			// let humidity = json.main.humidity;
	   			// let wind_speed = json.wind.speed;
                
               

	   		})
	}) 

	.catch(function(error) {
    console.log(error);
     });   
 

})