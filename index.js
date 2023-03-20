// Challenge 1: Student Grade Generator (Toy Problem)

// First, we need to prompt the user to input a number
// prompt-sync module is a function that creates prompting functions, so we call it in order to get the actual prompting function
// Two things are happening here:
//Firstly, prompt-sync makes it possible to use Node.js and not depend on the browser for testing.
//Secondly, prompt() is working as it's intended, by prompting the user to input a number.

const prompt = require('prompt-sync')();

let marks = prompt('What is your marks? ');
console.log(`The marks inputted is: ${marks}.`);

// The function studentGradeGenerator() contains conditionals for different grades.
// It will output "Value not recognize!" if the user enters negative values and marks greater than 100.

function studentGradeGenerator(marks) {
if (marks >= 0 && marks <= 39) {
    console.log("Grade E.");
} else if (marks >= 40 && marks <= 49) {
    console.log("Grade D.");
} else if (marks >= 50 && marks <= 59) {
    console.log("Grade C.");
} else if (marks >= 60 && marks <= 79) {
    console.log("Grade B.");
} else if (marks >= 80 && marks <= 100) {
    console.log("Grade A.");
} else {
    console.log("Value not recognized!");
}
}
studentGradeGenerator(marks);









// The speedDetedctor() uses the if..else if...else conditional. 
// First, for speeds that do not go above the speed limit (70), the driver is given a greenlight.
// In the event the speed is above this, the function computes the points.
// If the points do not go above 12 (marking an upper speed indicator of 130), the points are returned. 
// In the event the points are above 12, the driver is in trouble and their license is suspended. 

function speedDetector(speed) {
    let points = (speed - 70) / 5; // This calculates the number of points with each 5 speed units above the limit equating to a point.
    if (speed <= 70) {
        console.log("Ok");
    } else if (points > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${points}`);
    }
}

speedDetector(78);




const prompt = require('prompt-sync')();

let grossSalary = prompt('What is your monthly gross salary? ');
console.log(`The gross sallary inputted is: ${grossSalary}.`);

let personalTaxRelief = 2400; // personalTaxRelief p.m = KSh. 2400 (fixed) and only applies once

//let grossSalary = 30000;

// NHIF calculations
function NHIFDeductions(grossSalary) {
    if (grossSalary <= 5999 ) {
        return 150
    } else if (grossSalary <= 7999) {
        return 300
    } else if (grossSalary <= 11999) {
        return 400
    } else if (grossSalary <= 14999) {
        return 500
    } else if (grossSalary <= 19999) {
        return 600
    } else if (grossSalary <= 24999) {
        return 750
    } else if (grossSalary <= 29999) {
        return 850
    } else if (grossSalary <= 34999) {
        return 900
    } else if (grossSalary <= 39999) {
        return 950
    } else if (grossSalary <= 44999) {
        return 1000
    } else if (grossSalary <= 49999) {
        return 1100
    } else if (grossSalary <= 59999) {
        return 1200
    } else if (grossSalary <= 69999) {
        return 1300 
    } else if (grossSalary <= 79999) {
        return 1400 
    } else if (grossSalary <= 89999) {
        return 1500
    } else if (grossSalary <= 99999) {
        return 1600
    } else if (grossSalary >= 100000) {
        return 1700
    }
}

let NHIF = NHIFDeductions(grossSalary)
console.log(`NHIF: ${NHIF}.`);

// NSSF calculations using new rates

function NSSFDeductions(grossSalary) {
    if (grossSalary <=18000) {
        return grossSalary * 0.06
    } else if (grossSalary > 18000) {
        return 18000 * 0.06
    }
}
let NSSF = NSSFDeductions(grossSalary);
console.log(`NSSF deducted from your income at a rate of 6%: ${NSSF}.`);

// Calculating total insurance relief. 

let insurancePremium = prompt('What is your monthly insurance premium? ');
console.log(`The insurance premium inputted is: ${insurancePremium}.`);

//let insurancePremium = 1000;
//let NHIF = 300;
let insurance = parseInt(insurancePremium) + NHIF

function insuranceReliefCalculation (insurance) {
    //insurance = insurancePremium + NHIF

    if (insurance >= 0 && insurance < (100000 / 3)) {
        return insurance * 0.15;
    
    } else if (insurance >= (100000 / 3)) {
        return 5000;
    } 
    // else {
    //     return 0;
    // }
}

let insuranceRelief = insuranceReliefCalculation(insurance);
console.log(`Your insurance relief: ${insuranceRelief}`);

// Function to compute allowable pension
//  Scenario: If monthly gross income is KES 80,000, and actual contribution to a registered RBS of KES 15,000, taxable pay is KES 65,000.
let pensionDeductible = prompt('How much do you pay as pension? ');
console.log(`The pension inputted is: ${pensionDeductible}.`);

function allowablePensionFund(pensionDeductible) {
    if (pensionDeductible <= 20000) {
        return pensionDeductible;
    } else {
        return 20000
    }
}
 let pension = allowablePensionFund(pensionDeductible)
console.log(`Your allowable pension fund is: ${pension}.`);


// Taxable income calculations
let taxableIncome = grossSalary - (NHIF + NSSF + parseInt(pension));
console.log(`Taxable income subject to PAYE calculations: ${taxableIncome}.`);

// PAYE calculations
function paye(taxableIncome) {
    let personalTaxRelief = 2400;
    if (taxableIncome <= 24000) {
        return 0
    } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        return ((24000 * 0.10) + ((taxableIncome-24000) * 0.25) - (personalTaxRelief + insuranceRelief));
    } else {
        return (((24000 * 0.10) + (8333 *0.25) + ((taxableIncome - 32333) * 0.30)) - (personalTaxRelief + insuranceRelief))
        
    }
}
let PAYE = paye(taxableIncome)
console.log(`PAYE: ${PAYE}.`);

// Net salary calculation: 
function netSalary(grossSalary) {
    return (grossSalary - (NHIF + NSSF + PAYE))
}
let netIncome = netSalary(grossSalary);
console.log(`Your net salary: ${netIncome}.`);




