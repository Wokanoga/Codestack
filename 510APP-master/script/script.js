//Dude.  I fucking love this parsing shenanigans lol.  This is my shit.

//I just realized that I am still gonna have to display information to the user
//in 12hr format.  FUCK.  Well I'm probably gonna set my json back to 12 hr but in the same
//format as the toLocaleTimeString.  That way I can use everything I made for the 24hr format.

//Fuck everything.  For the sake of this project, if my users can't understand 24hr format, 
//they can just not use my free non profit program.  My users probably think imperial is
//better than metric too ffs.

function loadJSONfiles(){
    var xhr1 = new XMLHttpRequest(); 
    xhr1.open('GET', '../json/north.json', true);
    xhr1.responseType = 'text';
    xhr1.onload = function () {
        if (xhr1.status === 200) {
            northJson = JSON.parse(xhr1.responseText);
            northList = northJson.northbound;
            console.log(northList);
        }
    }
    xhr1.send();

    var xhr2 = new XMLHttpRequest(); 
    xhr2.open('GET', '../json/south.json', true);
    xhr2.responseType = 'text';
    xhr2.onload = function () {
        if (xhr2.status === 200) {
            southJson = JSON.parse(xhr2.responseText);
            southList = southJson.southbound;
            console.log(southList);
        }
    }
    xhr2.send();
}

function loadBusTimes() {

    //This will delete any child elements in our north and south columnts.
    var northCol = document.getElementById('northCol');
    while (northCol.firstChild) {
        northCol.removeChild(northCol.firstChild);
    }
    var southCol = document.getElementById('southCol');
    while (southCol.firstChild) {
        southCol.removeChild(southCol.firstChild);
    }

    var dropDownMenu = document.getElementById('dropDownMenu').value;
    checkTime();
    bTNorthFull = [];
    bTSouthFull = [];

    if (dropDownMenu==1){
        for (i=0;i<northList.length;i++){
            bTNorthFull.push(northList[i].farm);
        }
        for (i=0;i<southList.length;i++){
            bTSouthFull.push(southList[i].farm);
        }
    }else if (dropDownMenu==2){
        for (i=0;i<northList.length;i++){
            bTNorthFull.push(northList[i].odell);
        }
        for (i=0;i<southList.length;i++){
            bTSouthFull.push(southList[i].odell);
        }
    }else if (dropDownMenu==3){
        for (i=0;i<northList.length;i++){
            bTNorthFull.push(northList[i].clay);
        }
    }else if (dropDownMenu==4){
        for (i=0;i<northList.length;i++){
            bTNorthFull.push(northList[i].amtrak);
        }
        for (i=0;i<southList.length;i++){
            bTSouthFull.push(southList[i].amtrak);
        }
    }else if (dropDownMenu==5){
        for (i=0;i<northList.length;i++){
            bTNorthFull.push(northList[i].dtc);
        }
        for (i=0;i<southList.length;i++){
            bTSouthFull.push(southList[i].dtc);
        }
    }else if (dropDownMenu==6){
        for (i=0;i<southList.length;i++){
            bTSouthFull.push(southList[i].mlk);
        }
    }else if (dropDownMenu==7){
        for (i=0;i<southList.length;i++){
            bTSouthFull.push(southList[i].hospital);
        }
    }
    compareTimeArray();
}

function compareTimeArray(){
    bTNorthTrim=[];
    bTSouthTrim=[];
    for (i=0;i<bTNorthFull.length;i++){
        if(currentTime<bTNorthFull[i]){
            bTNorthTrim.push(bTNorthFull[i]);
        }
    }
    for (i=0;i<bTSouthFull.length;i++){
        if(currentTime<bTSouthFull[i]){
            bTSouthTrim.push(bTSouthFull[i]);
        }
    }
    trimArray();
}

function trimArray() {
    if (bTNorthTrim.length>3){
        bTNorthTrim.length = 3;
        console.log("Next 3 northgoing stops are : "+bTNorthTrim);
    }
    if (bTSouthTrim.length>3){
        bTSouthTrim.length = 3;
        console.log("Next 3 southgoing stops are : "+bTSouthTrim);
    }
    itsElementTimeExclamationMark();
}

function itsElementTimeExclamationMark() {
    var northCol = document.getElementById('northCol');
    var southCol = document.getElementById('southCol');
    var northH3 = document.createElement('h3');
    northH3.innerText = "Northward Buses";
    var southH3 = document.createElement('h3');
    southH3.innerText = "Southward Buses";
    northCol.appendChild(northH3);
    southCol.appendChild(southH3);

    if (bTNorthTrim.length > 0) {
        for (i = 0; i < bTNorthTrim.length; i++) {
            pTag = document.createElement('p');
            pTag.innerHTML = bTNorthTrim[i];
            northCol.append(pTag);
        }
    } else {
        pTag = document.createElement('p');
        pTag.innerHTML = "No bus will stop here going this way.";
        northCol.append(pTag);
    }
    if (bTSouthTrim.length > 0) {
        for (i = 0; i < bTSouthTrim.length; i++) {
            pTag = document.createElement('p');
            pTag.innerHTML = bTSouthTrim[i];
            southCol.append(pTag);
        }
    } else {
        pTag = document.createElement('p');
        pTag.innerHTML = "No bus will stop here going this way.";
        southCol.append(pTag);
    }
}
//Our clock.  We also make a variable to use later to compare to our northList or southList.
function time() {
    dt = new Date();
    timeStamp = dt.toLocaleTimeString();
    checkTime();
    document.getElementById('datetime').innerHTML = currentTime;
}

//For the ease of comparison, I need to use 24 hr format.  My json will need to be
//formatted for 24hr.  Then I just need to convert timeStamp to 24 hr for easy conversions.
//Otherwise I'd need to convert my json AND timeStamp to 24hr with code, or 
//compare the time in 12hr format which sounds like a huge hassle.

function checkTime() {
    currentTime = timeStamp; //timeStamp will go here

    //Put PM or AM into amPM to check later, and the hour digits into hour.
    var amPM = currentTime.slice(-2);
    //This will get us the hour, whether the hour is one or two digits.
    var hour = currentTime.slice(0, -9);

    //Some explanation in the console log for clarity
    /* console.log("Current time from timeStamp is '"+timeStamp+"'");
    console.log("The hour is "+hour);
    console.log("amPM is "+amPM)
    console.log("Therefore the 24hr format of the current time is:") */


    //Managed to get this fully working.  It will convert whatever time is coming from
    //timeStamp to a 00:00:00 24 hr format, so it can be easily compared to
    //the 24hr format of the json
    if ( amPM == "PM" ) {
        
        //hour can be anything from 1-12.  If it's 1-11 we need to add 12 to it.
        if (hour < 12) {
            //we then cut off the front of the string whatever is in hour. And the last 3 spaces.
            currentTime = currentTime.slice(hour.length, -3)
            currentTime = (parseInt(hour)+12)+currentTime;
        }
        else {
            currentTime = currentTime.slice(0, -3)
        }
    }
    else {
        if (hour<12) {
            if (hour<10){
                currentTime = currentTime.slice(hour.length, -3)
                currentTime = "0"+hour+currentTime
            }
            else {
                currentTime = currentTime.slice(0,-3);
            }
        }
        else {
            currentTime = currentTime.slice(hour.length, -3)
            currentTime = "00"+currentTime;
        }
    }
};

loadJSONfiles();

setInterval(time, 1000);
