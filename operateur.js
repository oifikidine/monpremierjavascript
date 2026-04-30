console.log("Ici je code les opérateurs en javascript");

// Addition

let prixUnitaire = 13;
let valeurAjoutee = 7;
let valeurReduction= 5;
let valeurDivision= 4;

//premiere technique d'addtion des nombres
let prixAdditionnel= 3+7 ;

// j'affiche la valeur de la variable prixAdditionnel
console.log("prix additionnel:",prixAdditionnel);

// deuxième méthode d'addition à l'aide des variables
let prixAdditionne2= prixUnitaire+ valeurAjoutee;

console.log("prixAdditionne2 : ", prixAdditionne2);

let eleve1= "Fatima";
let eleve2="Amina";

/* Ici on fait ce qu'on appelle la concaténation (l'addition de deux chaînes de caractères)*/
console.log(eleve1 + eleve2);
console.log(eleve1 +" " +eleve2);

// je concatène deux variables et je les stocks dans une autre variable.
let eleveCombo = eleve1 + " " + eleve2;

console.log("eleveCombo:",eleveCombo);


// soustraction
let prixRéduit = prixUnitaire - valeurReduction;

console.log("prix réduit: ", prixRéduit + "€");

// multiplication 
let prixMultiplie = prixUnitaire * valeurAjoutee;

console.log("prix multiplié : ", prixMultiplie);


// division 
let prixDivise = prixUnitaire / valeurDivision;

console.log("résultat du prix divisé :", prixDivise);

/*
* Les opérateurs de comparaison
* Nous allons comparer les valeurs qui sont stocker dans les variables.
* Allons-y!
*/

console.log("### Section Comparaison ###");
let quartier ="Mamoudzou";
let zone ="MAMOUDZOU";

console.log(quartier==zone);

console.log(quartier===zone);

let maha= 12;
let distanceParcourue= 5;

console.log(maha > distanceParcourue);

console.log(maha < distanceParcourue);

//est ce maha est supérieur ou égal à la distance parcourue
console.log(maha >= distanceParcourue);
// est ce que maha est inférieur ou égal à la distance Parcourue
console.log(maha <= distanceParcourue);
// est ce que la zone est différent du quartier 
console.log(zone != quartier);
// est ce que le quartier est strictement différent de la zone
console.log(quartier !== zone);

let prix5= 12;
let prix2= "12";

console.log(prix5==prix2);



