let marks = [40,69,12,80,90];
let overallPercent = ((marks[0]+marks[1]+marks[2]+marks[3]+marks[4])/500)*100;
console.log(overallPercent);
if(overallPercent >= 85){
    console.log("Promoted wth Distinction");
}
else if(50<=overallPercent && overallPercent < 84){
    console.log("Promoted");
}
else if(overallPercent < 50){
    console.log("Detained");
}
else if(overallPercent < 35){
    console.log("Automatically detained");
}

