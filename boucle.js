console.log("#### Section - Je suis dans la boucle ###");

let nombreTour = 0;
while (nombreTour <7){
    console.log("Tour de la maison au départ :", nombreTour );
    nombreTour = nombreTour + 1;

    console.log("Nombre de tours. Après le passage : ", nombreTour);
}

// Boucle FOR
for (let indice = 0; indice < 3; indice++/*Ici il rajoute + 1 à chaque fois*/) {
    console.log("L'indice est de : " , indice);
}

let listeEleves = ["Madi-Soilihi Ben", "Oifikidine", "Houmadi Chahida", "Mchangama Mounawara", "Anrabia Said", "Anzilati Mohamed", "Naël Chamsiddine", "Yowane Mohamed Ahamada", "Madi Mlimi Nouran", "Moussa Lidya", "Rachid Mahamodou", "Aristid-Jassem Fougeroux"];

console.log("Taille du tableau : ", listeEleves.length);
console.log(listeEleves[0]);
console.log(listeEleves[1]);
console.log(listeEleves[3]);

for (let i = 0; i < listeEleves.length; i++) {
    console.log(listeEleves[i]);
}

// 32 33 34