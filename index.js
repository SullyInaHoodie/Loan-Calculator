function calculateLoan(){
    loanAmountValue = document.getElementById
    ("loan-amount").value
    intrestRateValue = document.getElementById("intrest-rate").value
    
    MonthsToPayValue = document.getElementById("months-to-pay").value
    intrest = (loanAmountValue * (intrestRateValue * 0.01))
    / MonthsToPayValue
    monthlyPayments = (loanAmountValue / MonthsToPayValue + intrest).toFixed(2);
    document.getElementById("payment").innerHTML = 
    `Monthly Payment: ${monthlyPayments}`
}