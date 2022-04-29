// erstellen von Variablen für bestimmte HTML elemente 

const progressLine = document.getElementById("progress_line");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
console.log(currentActive)

// 1.Version zum ausführen von Code

// nextBtn.addEventListener("click", () => {
//   currentActive++;

//   if (currentActive > circles.length) {
//     currentActive = circles.length;
//   }
//   update();
//   console.log("currentactive " + currentActive);
// }); 

//2.Version zum ausführen vom Code
// Funktion nextButton sorgt dafür, dass unser Zähler "currentActive" um eins hochgezählt wird 
function nextButton() {
    currentActive++;
  // hier überprüft er, ob mein CurrentActive länger als meine Länge der vorhandenen Circle ist
  //falls ja, dann setzt er mein currentActive gleich mein circle.length . dadurch wird unnötiges hochzählen vermeidet
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }

    // ruft die update Funktion auf 
    update();
    console.log("currentactive " + currentActive);
}



// prevBtn.addEventListener("click", () => {
//   currentActive--;

//   if (currentActive < 1) {
//     currentActive = 1;
//   }
//   update();
//   console.log("currentactive " + currentActive);
// });

// Funktion prevButton sorgt dafür, dass unser Zähler "currentActive" um eins runtergezählt wird 
function prevButton() {
    currentActive--;
// überprüft, ob mein currentaktive kleiner als 1 ist, wenn ja 
// dann soll er mein current aktive auf 1 setzen, weil wir nicht in den negativen Bereich gehen dürfen mit unserer Progress bar 
    if (currentActive < 1) {
      currentActive = 1;
    }
    // ruft die Funktion update auf 
    update();
    console.log("currentactive " + currentActive);
}


// update funktion fügt die Klasse aktive hinzu oder entfernt sie 
function update() {
  // mit der Foreach gehen wir durch die ganzen Klassen welche ".circle" als Klasse haben 
  circles.forEach((circle, index) => {
    if (index< currentActive) {
      circle.classList.add("active"); // fügen active hinzu 
    } else {
      circle.classList.remove("active"); // entfernen active
    }
  });

  const active = document.querySelectorAll(".active");

  const progressStyle = progressLine.style; 

  // berechnung für die width bzw. dass der blaue Strich sich vergrößert bzw. verkürzt
  progressStyle.width =
    ((active.length - 1) / (circles.length - 1)) * 100 + "%"; 


    // disabled den prev oder next button 
    if(currentActive == 1) {
      // wenn disabled true ist, dann wird der button deaktiviert und ändert seine Farbe und ist nicht mehr aklickbar 
        prevBtn.disabled = true; 
        prevBtn.style.backgroundColor = "rgb(154, 154, 154)"
        prevBtn.style.cursor = "not-allowed"
    } else if( currentActive == circles.length) {
        nextBtn.disabled = true; 
    } else {
      // previos button wird wieder aktviert und nextbutton auch
        prevBtn.disabled = false; 
        prevBtn.style.backgroundColor = "rgb(43, 137, 154)"
        prevBtn.style.cursor = "pointer"
        nextBtn.disabled = false; 
    }
}
