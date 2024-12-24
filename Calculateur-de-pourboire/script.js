const btnEl = document.getElementById("calculate")
const billInput =document.getElementById("bill")
const tipInput = document.getElementById("tip")
const totaleSpan = document.getElementById("totale");

function calculateTotale(){
   const billValue = billInput.value;
   const tipValue = tipInput.value;
   const totaleValue = billValue * (1 + tipValue / 100); 
   totaleSpan.innerText = totaleValue.toFixed(2);
    
}

btnEl.addEventListener("click",calculateTotale)