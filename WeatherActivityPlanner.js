var temperature = Math.floor(Math.random() * 100);
var isRaining = false;
var windSpeed = Math.floor(Math.random() * 50);

console.log("Temperature: " + temperature);
console.log("Is it raining " + isRaining);
console.log("Wind Speed: " + windSpeed);

if(isRaining){
    console.log("Stay indoors with hot coffee.");
}
else if(temperature > 35){
    console.log("Go swimming.");
}
else if(temperature < 15 && windSpeed > 20){
    console.log("Too cold and windy — stay home.");
}
else{
    console.log("Perfect day for a walk.");
}