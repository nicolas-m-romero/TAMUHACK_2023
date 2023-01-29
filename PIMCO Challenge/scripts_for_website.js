function calculateRothIRA(monthlyInvestment, years) {
    // Assume an annual interest rate of 7%
    var interestRate = 0.07;
    // Calculate the total number of months
    var totalMonths = years * 12;
    // Initialize the total investment amount
    var totalInvestment = 0;
    // Loop through the total number of months
    for (var i = 0; i < totalMonths; i++) {
        // Add the current month's investment to the total
        totalInvestment += monthlyInvestment;
        // Multiply the total investment by the interest rate (compounded monthly)
        totalInvestment *= (1 + interestRate / 12);
    }
    // Return the final investment amount
    return totalInvestment;
}




function calculateTaxes(income) {
    // define the federal tax brackets for single filers
    var taxBrackets = [
        { bracket: "10%", limit: 9875 },
        { bracket: "12%", limit: 40125 },
        { bracket: "22%", limit: 85525 },
        { bracket: "24%", limit: 163300 },
        { bracket: "32%", limit: 207350 },
        { bracket: "35%", limit: 518400 },
        { bracket: "37%", limit: Infinity }
    ];
    // Initialize the total taxes owed
    var taxesOwed = 0;
    // Initialize the current tax bracket
    var currentBracket = "";
    // Loop through the tax brackets
    for (var i = 0; i < taxBrackets.length; i++) {
        // Check if the income falls within the current tax bracket
        if (income > taxBrackets[i].limit) {
            // Calculate the taxes owed for the current bracket
            taxesOwed += (taxBrackets[i].limit - taxBrackets[i - 1].limit) * (parseFloat(taxBrackets[i].bracket) / 100);
            // Update the current tax bracket
            currentBracket = taxBrackets[i].bracket;
        } else {
            // Calculate the taxes owed for the current bracket
            taxesOwed += (income - taxBrackets[i - 1].limit) * (parseFloat(taxBrackets[i].bracket) / 100);
            // Update the current tax bracket
            currentBracket = taxBrackets[i].bracket;
            // Break out of the loop
            break;
        }
    }
    return ('Your tax braket would be '+currentBracket+' and you would pay '+taxesOwed+' in taxes');
}

console(calculateTaxes(10000))