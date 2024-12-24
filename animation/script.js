const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX; // Position horizontale de la souris
    const yPos = event.offsetY; // Position verticale de la souris

    // Créer un nouvel élément <span>
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100 ;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    // Ajouter le <span> au body
    bodyEl.appendChild(spanEl);
    setTimeout(()=> {
        spanEl.remove();
    },3000);

   
});
