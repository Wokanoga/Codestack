// Lincoln MacKay
// Weather App

//Math.round() is a thing.  Very useful.

// 3/14/2019 10:47 added automated saving functionality.  Program loads last location instantly and checks if its different
//                 than the current geolocation when geolocation loads. Need to add something for when there is no
//                 previous location.

// 3/14/2019 3:33  some of these backgrounds don't work perfectly with the white text.  I'd need to find better photos.  Or change
//                 the color of the text.  I will leave as is for now.

// 3/15/2019 10:52 Well this program doesn't do like 2 major things that are to be graded.  However I am extremely satisfied with
//                 What I wanted to do.  Information I wanted to dislay is displayed.  It does so automatically and it saves
//                 the previous location in the event that the geolocation isn't loading.  I have also made it responsive and
//                 should work very well on mobile.  May have to bookmark this at home lol.

// 3/15/2019 11:11 First priority for new features would definitely be 5 day forecast.  Displayed plainly in desktop view.
//                 And to compress to a button in mobile.  Kinda like a navbar.  I do feel like I could have added a lot more
//                 features.  Which makes my feeling of satisfaction in this app slightly strange.

//Last Edited 3/15/2019


function loadJSON(url) {
  console.log(url);
  localStorage.setItem("url", url);
  var xhr = new XMLHttpRequest();
  //Use the line below to test.
  //xhr.open("GET", "../JSON/test.json", true);
  xhr.open("GET", url, true);
  xhr.responseType = "text";
  xhr.overrideMimeType("application/json");
  xhr.onload = function() {
    if (xhr.status === 200) {
      wInfo = JSON.parse(xhr.responseText);
      //Run populate right after it parses.  Was running it somewhere else with a delay.  This makes much more sense.
      populate();
    } else {
      alert("Did not load list");
    }
  };
  xhr.send();
}

//need to declare savedLocation here so our get location knows what the fuck it is if there is nothing in localStorage
let savedLocation;
//This loads first.  In the event that localstorage has something for us we'll load that instantly without having to wait
//for our location to be found.  Go to my getLocation();
function firstLoad() {
  // Use https://xxx or shit freaks out.
  if (localStorage.getItem("url")) {
    savedLocation = localStorage.getItem("url");
    loadJSON(savedLocation);
  }
}
let firstTime = true;
var btnCElement = document.getElementById("tempBtnC");
var btnFElement = document.getElementById("tempBtnF");

//Our function that populatues our html elements.  It runs every time a new json is loaded.
function populate() {
  tempElement = document.getElementById("temperature");
  hiLoElement = document.getElementById("hiLoTemp");
  var wTypeElement = document.getElementById("weatherType");
  var cSBtnElement = document.getElementById("cityStateBtn");

  cSBtnElement.innerText = wInfo.name;
  wTypeElement.innerText = wInfo.weather[0].description;

  //I decided to save the tempBtns to local storage so I load the setting last used.
  if (localStorage.getItem("tempSetting") == "C") {
    tempBtnC();
  } else {
    tempBtnF();
  }

  var bg = document.getElementById("backGround");

  //Monolithic if statement for the background to be used.  Lots of conditions.

  //It's almost as if the 3rd round in the if statement is an else instead of an else if.  If I delete parts of the if statement,
  //it the new 3rd round of the if statement will work.

  //Ok so the syntax of:     if("asdf" == "33" || "44" || "55"){do a thing}      will always do a thing.  wtf

  //So     if("asdf" == "33" || "44" || "55"){do a thing}     was a problem.  I fixed it and also decresed letters typed by 90%
  //or something.  Probably should have done that in the first place.

  if (wInfo.weather[0].main == "Clear") {
    bg.className = "container bg" + 1;
  } else if (wInfo.weather[0].description == "overcast clouds") {
    bg.className = "container bg" + 2;
  } else if (
    wInfo.weather[0].main == "Clouds"
  ) {
    console.log(wInfo.weather[0].description);
    bg.className = "container bg" + 3;
  } else if (
    wInfo.weather[0].main == "Rain" || wInfo.weather[0].main == "Drizzle"
  ) {
    bg.className = "container bg" + 4;
  } else if (
    wInfo.weather[0].main == "Thunderstorm"
  ) {
    bg.className = "container bg" + 5;
  } else if (
    wInfo.weather[0].main == "Snow"
  ) {
    bg.className = "container bg" + 6;
  } else if (wInfo.weather[0].main == "Atmosphere") {
    //Tornado, volcanis ash, haze, smoke, squalls.  I simply use a post apocalyptic picture for this one.
    //Seems suitably descriptive for the weather.
    bg.className = "container bg" + 7;
  }
}

//Basic clock.  Pulled from Date();
function time() {
  var dt = new Date();
  timeStamp = dt.toLocaleTimeString();
  document.getElementById("datetime").innerHTML = timeStamp;
  monthDay = dt.toLocaleDateString();
  document.getElementById("dateMonthDay").innerHTML = monthDay;
  //datetime and dateMonthDay, although invisible to the user, have already mostly faded in by the time that time() loads.  
  //So I delay it by applying the fadein class when this time() function first loads.
  if (firstTime = true){
    firstTime = false;
    var timeElement = document.getElementById('fadeInDelay');
    timeElement.className = "row bottomStuff fadein";
  }
}

setInterval(time, 1000);

//I get the geolocation.
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

//if the url of geolocation does not equal the saved location, redo everything and update elements based on the
//weather of the current location.  Problem is that the coordinates are always slightly different.  I am going to fix this by
//rounding the coordinates to a particular decimal.  Math.round(num1*num2)/num2.  Pretty nifty.

//This has massively improved the snapiness of the app.

function getPosition(position) {
  lat = Math.round(position.coords.latitude * 10000) / 10000;
  lon = Math.round(position.coords.longitude * 10000) / 10000;
  forecastURLCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=7f2c6812402ad81e68af50e00b070663`;
  console.log("Latitude: " + lat);
  console.log("Longitude: " + lon);
  if (forecastURLCoords != savedLocation) {
    loadJSON(forecastURLCoords);
  }
}

//Basic flip flop coloring of the buttons.  Will add funcionality here later
//Functionality added.  Sets tempSetting localstorage to C or F based on the function called.  Resets btn opacities based
//on the function called.  Populates elements based on the function called.
//populate() calls based on tempSetting.
function tempBtnC() {
  localStorage.setItem("tempSetting", "C");
  btnCElement.style.opacity = 1;
  btnFElement.style.opacity = 0.3;
  //I simply convert the values in the list to whatever I need.
  tempElement.innerText = Math.round(wInfo.main.temp - 273.15) + "°";
  hiLoElement.innerText =
    "hi " +
    Math.round(wInfo.main.temp_max - 273.15) +
    "° | lo " +
    Math.round(wInfo.main.temp_min - 273.15) +
    "°";
}

function tempBtnF() {
  localStorage.setItem("tempSetting", "F");
  btnCElement.style.opacity = 0.3;
  btnFElement.style.opacity = 1;
  //0K − 273.15 = -273.1°C
  tempElement.innerText =
    Math.round(((wInfo.main.temp - 273.15) * 9) / 5 + 32) + "°";
  hiLoElement.innerText =
    "hi " +
    Math.round(((wInfo.main.temp_max - 273.15) * 9) / 5 + 32) +
    "° | lo " +
    Math.round(((wInfo.main.temp_min - 273.15) * 9) / 5 + 32) +
    "°";
}

//I load both of these function at the same time.
firstLoad();
getLocation();
