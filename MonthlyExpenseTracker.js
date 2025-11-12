let expenses = [12000, 3000, 15000, 4000, 2500];
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];

let average = total / expenses.length;

let taxRate = 0.10;
let finalAmount = total;
finalAmount += finalAmount * taxRate;

console.log("💸 Monthly Expense Report:");
console.log("--------------------------");
console.log("Total (before tax): ₹" + total.toFixed(2));
console.log("Average per category: ₹" + average.toFixed(2));
console.log("Final amount (after 10% tax): ₹" + finalAmount.toFixed(2));
}