// Récupération des éléments du DOM
const btnEl = document.getElementById("btn");
const imcInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculeIMC() {
    // Récupérer les valeurs des champs et les convertir en nombres
    const heightValue = parseFloat(document.getElementById("height").value) / 100; // Conversion en mètres
    const weightValue = parseFloat(document.getElementById("weight").value);

    // Vérifier si les valeurs sont valides
    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
        alert("Veuillez entrer des valeurs valides pour la taille et le poids !");
        return;
    }

    // Calculer l'IMC
    const imcValue = weightValue / (heightValue * heightValue);

    // Afficher l'IMC dans le champ de résultat avec deux décimales
    imcInputEl.value = imcValue.toFixed(2);

    // Déterminer la condition de poids
    if (imcValue < 18.5) {
        weightConditionEl.innerText = "Poids insuffisant";
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
        weightConditionEl.innerText = "Poids normal";
    } else if (imcValue >= 25 && imcValue <= 29.9) {
        weightConditionEl.innerText = "Surpoids";
    } else {
        weightConditionEl.innerText = "Obésité";
    }
}

// Ajouter l'événement au clic sur le bouton
btnEl.addEventListener("click", calculeIMC);
