let num1 = Math.floor(Math.random() * 20);
let num2 = Math.floor(Math.random() * 20);
console.log("Number 1: " + num1);
console.log("Number 2: " + num2);
let operator = Math.floor(Math.random() * 4);
switch(operator){
    case 0:
        console.log("Addition" , num1 + num2);
        break;
    case 1:
        console.log("Subtraction" , num1 - num2);
        break;
    case 2:
        console.log("Multiplication" , num1 * num2);
        break;
    case 3:
        console.log("Division" , num1 / num2);
        break;
}

