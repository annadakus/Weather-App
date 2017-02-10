$(document).ready(function(){
	
	
function getWeather(lat, lon) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			response = JSON.parse(this.responseText);
			callback(response);
		}
	}
	var url = "https://api.apixu.com/v1/current.json?key=4bc597d576b740ae85c180503170802&q="+ lat +"," + lon;
	xhttp.open("GET", url, true);
	xhttp.send();
}
function getGeoData() {
	navigator.geolocation.getCurrentPosition(function(data){
		getWeather(data.coords.latitude, data.coords.longitude)
	})
}


getGeoData()
function callback(data) {
		var weather;
		var code = data.current.condition.code
		switch (code) {
			case 1000: {
				weather = "clear"
				break;
			}
			case (1003||1006||1009||1030||1135): {
				weather = "cloudy"
				break;
			}
			case (1063||1150||1153||1180||1183||1186||1189||1192||1195||1198||1201||1237||1240||1243||1246||1249||1252||1261||1264): {
				weather = "rain"
				break;
			}
			case (1066||1069||1072||1114||1117||1147||1168||1171||1204||1207||1210||1213||1216||1219||1225||1255||1258): {
				weather = "snow"
				break;
			}
			case (1087||1273||1276||1279||1282): {
				weather = "thunderstorm"
				break;
			}
			default: {
				weather = "clear"
			}
		}
		
		var C = data.current.temp_c;
		var F = data.current.temp_f;

		$(".temperature").text(C + " °C");
		$(".temperature").on("click", function(){
			if ($(".temperature").text() == C + " °C"){
				$(".temperature").text(F + " °F");
				
			} else {
			$(".temperature").text(C + " °C");
		}
		});

		
		var country = data.location.country;
		$(".country").text(country);

		var region = data.location.name;
		$(".region").text(region);

		if (weather === "cloudy"){
			$(".images").append("<img src='http://www.clker.com/cliparts/0/C/g/6/V/B/cloud-hi.png' class='cloud' alt='Cloud clip art'/><img src='http://www.clker.com/cliparts/I/o/u/P/4/7/cloud-md.png' class='small-img' alt='Cloud clip art'/>");
			$(".thing").append("<img src='http://www.clker.com/cliparts/H/x/f/d/C/U/coffee-english-th.png' alt='Coffee-english clip art'/>");
			
		};

		if (weather === "clear") {
			$(".images").append("<img src='http://www.clker.com/cliparts/Y/P/T/T/s/e/sun-md.png' class='sun' alt='Yellow Sunshine clip art'> ");
			$(".thing").append("<img src='http://www.clker.com/cliparts/P/z/9/l/C/e/sunglass-th.png' alt='Sunglass clip art'/><img src='http://www.clker.com/cliparts/A/p/i/Z/w/T/mouth-th.png' alt='Mouth clip art'/>");
			
		}
		if (weather === "rain") {
			$(".images").append("<img src='http://www.clker.com/cliparts/0/C/g/6/V/B/cloud-md.png' class='raining' alt='Cloud clip art'/><img src='http://www.clker.com/cliparts/s/M/l/w/9/a/rain-drops-th.png' class='raindrop' alt='Rain Drops clip art'/>");
			$(".thing").append("<img src='http://www.clker.com/cliparts/w/H/F/A/9/E/mint-green-umbrella-th.png' alt='Mint Green Umbrella clip art'/>");
			
		}
		if (weather === "thunderstorm") {
			$(".images").append("<img src='http://www.clker.com/cliparts/n/r/w/R/F/W/cloud-hi.png' class='darkcloud' alt='Cloud clip art'/><img src='http://www.clker.com/cliparts/c/o/R/u/y/g/lightning-bolt-th.png' class='lightning' alt='Lightning Bolt clip art'/>");
			$(".thing").append("<img src='http://www.clker.com/cliparts/f/c/5/7/11970970671418396541johnny_automatic_jacket.svg.thumb.png' alt='Clothing Jacket clip art'/>");
			
		}
		if (weather === "snow") {
			$(".images").append("<img src='http://www.clker.com/cliparts/0/C/g/6/V/B/cloud-md.png' class='snow' alt='Cloud clip art'/><img src='http://www.clker.com/cliparts/8/3/3/3/12562200971717098556snow.svg.thumb.png' class='snowflake1' alt='Snow clip art'/><img src='http://www.clker.com/cliparts/y/T/a/S/F/r/snowflake-th.png' class='snowflake2' alt='Snowflake clip art'/><img src='http://www.clker.com/cliparts/8/3/3/3/12562200971717098556snow.svg.thumb.png' class='snowflake1' alt='Snow clip art'/>");
			$(".thing").append("<img src='http://www.clker.com/cliparts/1/5/7/b/11949864461694789848winter_hat_nathan_eady_01.svg.thumb.png' alt='Winter Hat clip art'/>");
			
		}
	};
	});	










