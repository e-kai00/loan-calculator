let paymentEveryMo = document.querySelector('#payment-mo');
let totalInterest = document.querySelector('#interest');
let loanInterest = document.querySelector('#loan-interest');
let loanInput = document.querySelector('#ammount');
let loanTermInput = document.querySelector('#years');
let interestRateInput = document.querySelector('#rate');
let messageText = document.querySelector('#message');
let calculateButton = document.querySelector('#calculate-button');
let inputs;
let principal;
let interest;
let payments; 


document.addEventListener('DOMContentLoaded', () => {

    paymentEveryMo.innerHTML = 0;
    totalInterest.innerHTML = 0;
    loanInterest.innerHTML = 0;
    
    calculateButton.disabled = true;

    inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('keyup', inputValidation))

    calculateButton.addEventListener('click', calculate);
    document.querySelector('#clear-button').addEventListener('click', clearInput);
    
});

function inputValidation() {

    let principalIsValid = false;
    let paymentsIsValid = false;
    let interestIsValid = false;    
    let message = '';

    principal = parseFloat(loanInput.value);
    interest = parseFloat(interestRateInput.value);
    payments = parseFloat(loanTermInput.value);    

    if (principal === '') {
        message = '';

    } else if (principal < 0) {
        message = 'Should be more than 0'
    } else {
        principalIsValid = true;
    }

    if (payments === '') {
        message = '';
    } else if (payments < 0 || payments > 30) {
        message = 'Should be withtin 0 - 30';
    } else {
        paymentsIsValid = true;
    }

    if (interest === 0) {
        message = '';
    } else if (interest < 0 || interest > 100 ) {
        message = 'Should be within 0 - 100';
    } else {
        interestIsValid = true;
    }

    messageText.innerText = message;

    if (principalIsValid && paymentsIsValid && interestIsValid) {
         calculateButton.disabled = false;
    } else {
        calculateButton.disabled = true;
    }
       
}

function calculate() {

    // Convert interest from a percentage to a decimal.
    // Convert from an annual rate to a monthly rate.
    // Convert payment period in years to the number of monthly payments.

    interest = interest / 100 / 12;
    payments = payments * 12;

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

function clearInput() {
    let inputElements = document.querySelectorAll('input');
    inputElements.forEach(element => {
        element.value = ''
    })

    paymentEveryMo.innerHTML = 0;
    totalInterest.innerHTML = 0;
    loanInterest.innerHTML = 0;
}

