let Totalamount = Math.floor(Math.random() * 100000) ;
console.log("Totalamount: " + Totalamount);

if(Totalamount >= 1000){
    Totalamount -= Totalamount * 0.25;
    console.log("You get a discount of 25%");
}else if(Totalamount >= 5000){
    Totalamount -= Totalamount * 0.15;
    console.log("You get a discount of 15%");
}else if(Totalamount >= 2000){
    Totalamount -= Totalamount * 0.05;
    console.log("You get a discount of 5%");
}else{
    console.log("No discount applied.");
}
