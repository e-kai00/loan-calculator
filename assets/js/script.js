let paymentEveryMo = document.querySelector('#payment-mo');
let totalInterest = document.querySelector('#interest');
let loanInterest = document.querySelector('#loan-interest');
let loanInput = document.querySelector('#ammount');
let loanTermInput = document.querySelector('#term');
let interestRateInput = document.querySelector('#rate')

document.addEventListener('DOMContentLoaded', () => {

    paymentEveryMo.innerHTML = 0;
    totalInterest.innerHTML = 0;
    loanInterest.innerHTML = 0;



});

// calculate monthly payment:
// loan principle * (interest rate / number of payments)

// calculate total interest
// (interest rate / number of payments) * loan principle = interest

// calculate loan + interest