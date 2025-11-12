let userName = "Harsh";           
let userAge = 20;                 
let isActive = true;               
let hobbies = ["coding", "music"];
let profile = { city: "Delhi", country: "India" };  
let score = null;               
let futureGoal;                   

let dataSummary = [
  { Label: "Username", Value: userName, Type: typeof userName },
  { Label: "Age", Value: userAge, Type: typeof userAge },
  { Label: "Active Status", Value: isActive, Type: typeof isActive },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "Profile", Value: profile, Type: typeof profile },
  { Label: "Score", Value: score, Type: typeof score },
  { Label: "Future Goal", Value: futureGoal, Type: typeof futureGoal }
];

console.table(dataSummary);
