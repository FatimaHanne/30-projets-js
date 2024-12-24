const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")
const resultEl = document.getElementById("result")
function calculateAge(){
  const birthdayValue = birthdayEl.value;
    if(birthdayValue ===""){
        alert ("S'il vous plaît entrez votre date")
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText =`Votre âge est ${age} ${age > 1 ? "ans" : "an"} ` 
    }
    
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue)
  const age = currentDate .getFullYear() - birthdayDate.getFullYear();
 const month = currentDate.getMonth() - birthdayDate.getMonth();

 if( month < 0 ||(month === 0 && currentDate.getDate() < birthdayDate.getDate())){
    age--
 }
  return age;
}


btnEl.addEventListener("click", calculateAge)