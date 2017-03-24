const surfApp = {}

surfApp.weatherKey = '6d7985dd0ec241b1a91185228172802'
// World Weather Online - 60 day free trial beginning Feb 28, 2017
// surfApp.flightKey = 'je607667967445462231337660809615' 
// Skyscanner
surfApp.apiKey = 'prtl6749387986743898559646983194' 
// this one works!!! but is not the one assigned from dashboard, it is the same one for both via proxy

// background image randomizer

const backgroundImages = [
	'anton-repponen-99506-small.jpg',
	'austin-neill-159602-small.jpg',
	'austin-neill-159603-small.jpg',
	'josh-austin-185376-small.jpg',
	'oliver-raatz-146524-small.jpg',
	'rob-bye-43801-small.jpg',
	'tim-marshall-140944-small.jpg',
	'woodrow-walden-39673-small.jpg'
];

$('#background').css({'background-image': 'url(assets/' + backgroundImages[Math.floor(Math.random() * backgroundImages.length)] + ')'});

// end background image randomizer


// start large object containing location info. latlng values and flightURL are taken from here and used to make an ajax call for each

surfApp.locationInfo = {
	canggu: {
		name: "Canggu",
		latlng: '8.6478,115.1385',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/DPS/anytime/anytime"
	},
	donegal: {
		name: "Donegal",
		latlng: '29.8587,31.0218',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/CFN/anytime/anytime"
	},
	durban: {
		name: "Durban",
		latlng: '54.6549,8.1041',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/DUR/anytime/anytime"
	},
	elParedon: {
		name: "El Paredon",
		latlng: '13.9186,91.0748',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/GUA/anytime/anytime"
	},
	hoddevik: {
		name: "Hoddevik",
		latlng: '62.1167,5.1667',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/AES/anytime/anytime"
	},
	hossegor: {
		name: "Hossegor",
		latlng: '43.6646,1.3977',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/CDG/anytime/anytime"
	},
	huntingtonBeach: {
		name: "Huntington Beach",
		latlng: '33.6603,117.9992',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/LAX/anytime/anytime"
	},
	lagos: {
		name: "Lagos",
		latlng: '37.1028,8.6730',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/FAO/anytime/anytime"
	},
	laJolla: {
		name: "La Jolla",
		latlng: '32.8328,117.2713',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/SAN/anytime/anytime"
	},
	oahu: {
		name: "Oahu",
		latlng: '21.4389,158.0001',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/HNL/anytime/anytime"
	},
	sanDiego: {
		name: "San Diego",
		latlng: '32.7157,117.1611',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/SAN/anytime/anytime"
	},
	sanVicente: {
		name: "San Vicente de la Barquera",
		latlng: '43.3813,4.3971',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/BIO/anytime/anytime"
	},
	sayulita: {
		name: "Sayulita",
		latlng: '20.8689,105.408',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/PVR/anytime/anytime"
	},
	sennenCove: {
		name: "Sennen",
		latlng: '50.0756,5.7030',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/EXT/anytime/anytime"
	},
	taghazout: {
		name: "Taghazout",
		latlng: '30.5453,9.7090',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/AGA/anytime/anytime"
	},
	tavarua: {
		name: "Tavarua",
		latlng: '17.8581,177.2018',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/NAN/anytime/anytime"
	},
	tofoBeach: {
		name: "Tofo Beach",
		latlng: '23.8569,35.5480',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/INH/anytime/anytime"
	},
	waikiki: {
		name: "Waikiki",
		latlng: '21.2850,157.8357',
		flightURL: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/CA/cad/en-US/YYZ/HNL/anytime/anytime"
	},
};

// end location info

// flight script

surfApp.getFlightInfo = (location) => {
	$.ajax({
		url: 'http://proxy.hackeryou.com',
		dataType: 'json',
		method: 'GET',
		data: {
			reqUrl: surfApp.locationInfo[location].flightURL,
			params: {	
				apiKey: 'prtl6749387986743898559646983194',
			}
		}
	})
	.then((flightPlaceholder) => {
		surfApp.displayFlight(flightPlaceholder);
	}) 
} 

// end .getFlightInfo

// flight script

surfApp.displayFlight = (data) => {
	const quotes = _.sortBy(data.Quotes,'MinPrice');
	const lowestPrice = quotes.shift();
	$(".displayPrice").text(lowestPrice.MinPrice);
}

// end flight script


// weather script

surfApp.getWeather = (location) => {
	const locationData = surfApp.locationInfo[location]
	$.ajax({
		url: 'http://api.worldweatheronline.com/premium/v1/marine.ashx',
		method: 'GET',
		dataType: 'json',
		data: {
			key: surfApp.weatherKey,
			format: 'json',
			q: locationData.latlng
		}
	})
	.then((weatherPlaceholder) => {
		surfApp.displayWeather(weatherPlaceholder);
	});
}

surfApp.displayWeather = (response) => {
	$(".displayWeatherDesc").text(response.data.weather[0].hourly[0].weatherDesc[0].value);
	$(".displayWeatherImage").attr('src', response.data.weather[0].hourly[0].weatherIconUrl[0].value);
	$(".displayHighTemp").text(response.data.weather[0].maxtempC);
	$(".displayLowTemp").text(response.data.weather[0].mintempC);
	$(".displaySwellHeight").text(response.data.weather[0].hourly[0].swellHeight_m);
	$(".displaySwellPeriod").text(response.data.weather[0].hourly[0].swellPeriod_secs);
	$(".displaySwellDirection").text(response.data.weather[0].hourly[0].swellDir16Point);
	$(".displayWaterTemp").text(response.data.weather[0].hourly[0].waterTemp_C);
};

// end weather script


// populate location field based on user selection

surfApp.updateLocation = () => {
	const userLocation = $('select option:selected').text();
	$('.displayLocation').text(userLocation);
}

// end updateLocation


// event listeners //
// on click, run the following functions:
// getFlightInfo: request data for userSelection from Skyscanner API
// getWeather: request data for userSelection from weather API
// updateLocation: update location field based on userSelection
// showResultsPage: show resultsPage, hide mainPage 

surfApp.events = () => {
	$('#submit').on('click', (e) => {
		e.preventDefault();
		$('.destination').empty();
		const userSelection = $('#destinationMenu').val();
		surfApp.getFlightInfo(userSelection);
		surfApp.getWeather(userSelection);
		surfApp.updateLocation();
		surfApp.showResultsPage();
	}) 
} 

// end .events

// main page hide on click of #submit
// results page hide on click of #tryAgain 

surfApp.showResultsPage = () => {
	$(".mainPage").hide();
	$(".resultsPage").fadeIn();
}

surfApp.showMainPage = () => {
	$(".resultsPage").hide();
	$(".mainPage").fadeIn();
}

// startOver: hide resultsPage, show mainPage

surfApp.startOver = () => {
	$('#tryAgain').on('click', (e) => {
		e.preventDefault();
		surfApp.showMainPage();
	})
}

// end startOver

surfApp.init = () => {
	surfApp.events();
	surfApp.startOver();
};


$(() => {
	surfApp.init();
})

