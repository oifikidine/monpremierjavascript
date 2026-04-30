/*
 *Les conditions en JavaScript
 */

let nombreFruits= 19;

/**
 * j'affiche l'alerte SI le nombre de fruits est égal à 18
 */

/**
 * Ma condition commence par le mot clé IF
 * La synthaxe à respecter est: 
 * if() {}
 */
if (nombreFruits == 18) { // nous avons  une comparaison à égalité stricte
    alert("Vous avez atteint 18 fruits."); // fonction alert ()

};

let noteEleve = 10;

if (noteEleve >= 10) {
    alert("Félicitation, vous ête admis avec une note de " + noteEleve);
};

let ageNetflix= 13;

if (ageNetflix >= 18) {
    alert("Vous pouvez regardez Rambo 3.")
};

if (ageNetflix < 18) {
    alert("On vous recommande le film le roi lion parce que vous avez " + ageNetflix + " ans")
};

let ageTelespectateur = 18;

if (ageTelespectateur >= 18) {
    alert("Vous pouvez regarder le roi Lion car vous avez" + ageTelespectateur);
};

let pointPermis = 12;

if(pointPermis == 12) {
    alert("Vous avez un bonus !");
}

else{
    alert("Vous avez des malus !");
}
