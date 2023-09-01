let paymentEveryMo = document.querySelector('#payment-mo');
let totalInterest = document.querySelector('#interest');
let loanInterest = document.querySelector('#loan-interest');
let loanInput = document.querySelector('#ammount');
let loanTermInput = document.querySelector('#years');
let interestRateInput = document.querySelector('#rate')

document.addEventListener('DOMContentLoaded', () => {

    paymentEveryMo.innerHTML = 0;
    totalInterest.innerHTML = 0;
    loanInterest.innerHTML = 0;

    // loanInput.value = 10000;
    // loanTermInput.value = 3;
    // interestRateInput.value = 5;

    // calculate()

});

function calculate() {

    // Convert interest from a percentage to a decimal.
    // Convert from an annual rate to a monthly rate.
    // Convert payment period in years to the number of monthly payments.

    let principal = parseFloat(loanInput.value);
    let interest = parseFloat(interestRateInput.value) / 100 / 12;
    let payments = parseFloat(loanTermInput.value) * 12;

    // monthly payments
    let x = Math.pow(1 + interest, payments);    
    let monthly = (principal * x * interest) / (x - 1)
   
    // Check that the result is a finite number.
    if (isFinite(monthly)) {
        paymentEveryMo.innerHTML = monthly.toFixed(2);
        totalInterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
        loanInterest.innerHTML = (monthly * payments).toFixed(2);
    } else {
        paymentEveryMo.innerHTML = "";
        totalInterest.innerHTML = "";
        loanInterest.innerHTML = "";
        alert('Something went wrong. Please, try again.');
    }
    

}
