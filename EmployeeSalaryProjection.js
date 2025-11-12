var salary = 50000;
var annualIncrement = salary * 0.4;
console.log("Annual Salary: " + annualIncrement);

for(var i = 0; i < 5; i++){
    salary += annualIncrement;
    console.log("Year " + (i + 1) + ": " + salary);
}
