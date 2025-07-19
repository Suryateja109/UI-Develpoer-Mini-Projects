function CalculateTip() 
{ 
    const billAmount = parseFloat(document.getElementById("ba").value); 
    const percentageTip = parseFloat(document.getElementById("pt").value); 
    const errorMessage = document.getElementById("error"); 
    const tipAmount = document.getElementById("ta"); 
    const totalAmount = document.getElementById("t"); 
    console.log(billAmount); 
    console.log(percentageTip);

    if (isNaN(billAmount) || isNaN(percentageTip) || billAmount < 0 || percentageTip < 0)
    {
        errorMessage.textContent = "Please enter valid numbers for bill and tip percentage.";
        tipAmount.value = "";
        totalAmount.value = ""; 
        return; 
    } 
    const tip = (billAmount * percentageTip) / 100; 
    const total = billAmount + tip; 
    
    tipAmount.value = tip.toFixed(2);
    totalAmount.value = total.toFixed(2); 
    errorMessage.textContent = "";
}