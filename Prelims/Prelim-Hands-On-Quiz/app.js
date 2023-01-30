//Punzalan, Aaron M.

const calculation = require('./calculation.js');

const hoursWork = 4;
const days = 6;
const ratePerHour = 300;
const grossIncome = calculation.multiply(hoursWork, ratePerHour * days);
const tax = calculation.multiply(0.1, grossIncome);
const SSS = 1200;
const pagIbigFund = 300;
const philHealth = 400;
const tdeductions = calculation.add(tax + SSS + pagIbigFund + philHealth, 0);
const salary = calculation.subtract(grossIncome, tdeductions);

console.log('THE GROSS INCOME IS: ' + grossIncome);
console.log('TAX: ' + tax);
console.log('SSS: ' + SSS);
console.log('PAG-IBIG FUND: ' + pagIbigFund);
console.log('PHILHEALTH: ' + philHealth);
console.log('TOTAL DEDUCTIONS: ' + tdeductions);
console.log('THE NET SALARY IS: ' + salary);
