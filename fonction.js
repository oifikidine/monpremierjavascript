/**
 * ## Les fonctions en JavaScript ###
 */

console.log("#### Section Fonction ####");

/**
 * la fonction doit additionner des nombres et retourner le résultat de l'addition.
 * la fonction (additionner) à besoin de deux paramètres : chiffre1 et chiffre2;
 * Ensuite, la fonction (additionner) additionne les deux paramètres : chiffre1 + chiffre2.
 * Enfin, la fonction (additionner) retourne ou renvoie le résultat du calcul.
 */
function additionner(chiffre1, chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
}

// J'utilise la fonction additionner(chiffre1, chiffre2) pour calculer la somme de deux nombres

let sommesAdditionner = additionner(15,8);

console.log("sommes1:",sommesAdditionner);

// je crée une fonction qui doit soustraire des nombres et me renvoye le résultat.
function soustraire(chiffre1, chiffre2) {
    let resultat = chiffre1 - chiffre2;
    return resultat
}

// j'utilise la fonction soustraire pour soustraire chiffre1 et chiffre2 
let resteSoutraction = soustraire(15,8);

console.log("différence", resteSoutraction);

/* je crée la fonction multiplication pour multiplier chiffre1 et chiffre2 et me renvoyez le résultat*/
function multiplication(chiffre1, chiffre2){
    let resultat = chiffre1 * chiffre2;
    return resultat
}

/* j'utilise la fonction multiplication pour multiplier 15 par 8*/
let produitMultipication = multiplication(15,8);

console.log("produit:", produitMultipication);