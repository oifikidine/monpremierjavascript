const elementButtonValiderDate = document.querySelector("#validerDate");

let elementSpanDateDuJour = document.querySelector("#dateDuJour");
let elementSpanDateDuJour2 = document.querySelector("#dateDuJourFormat2");

const maDate = new Date();
elementButtonValiderDate.addEventListener("click", function(){
    // Je décris l'action à réaliser lorsque je clique sur le bouton valider date.
    console.log("### je suis dans le bouton Valider Date. ###");

    elementSpanDateDuJour.innerHTML = maDate;

    elementSpanDateDuJour2.textContent = maDate.toLocaleDateString();

    

});

let bouttonFleche = document.querySelector("#boutonFleche");
 
// l'évenement keydown va se déclencher lorsque j'appuie sur une touche de mon clavier.
bouttonFleche.addEventListener("keydown", (event) =>{

    console.log("je suis dans l'évenement KEYDOWN ===");
    console.log("Clé event :",event.key);

});


/**
 * mon 
 * 
*/
let elementInputNomForm = document.querySelector("#Nom");


let messageSalutation;
elementInputNomForm.addEventListener("change", (event) => {
    console.log(event.target.value);
    messageSalutation = `Bonjour ${event.target.value}`;

    let messageForm = document.querySelector("#message");

messageForm.textContent = messageSalutation +" Vous avez 18 ans ";

console.log(messageForm);
});


/* envoyer le formulaire
* je vais récupérer les données saisies sur le formulaire :
* - nom
* - prenom
* - situation
* - année de naissance 
*/

// je récupère la balise </form> avec ses enfants; Ensuite, je stocke la balise dans variable elementForm.
let elementForm = document.querySelector('#formAge');
console.log("elementForm : ", elementForm);

// j'associe l'événement 'submit'
elementForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("#### Je suis l'évenement Submit du formulaire");

     const nom = document.getElementById("Nom").value;
     const prenom = document.getElementById("Prenom").value;
     const situation = document.getElementById("Situation").value;
     const anneeDeNaissance = document.getElementById("anneeNaissance").value;

     console.log("NOM saisi :" ,nom);
     console.log("PRENOM saisi :" ,prenom);
     console.log("SITUATION saisi :", situation)
     console.log("ANNÉE DE NAISSANCE saisi :" ,anneeDeNaissance);
});


 const aujourdhui  = new Date();
 

// // 1. Fonction pour calculer l'âge
 function calculAge(anneeNaissance) {
     return aujourdhui.getFullYear() - anneeNaissance;
 };

 // 3. On récupère l'input de saisie
 const inputAnnee = document.getElementById("anneeNaissance");

// // 4. On récupère la div résultat
 const divResultat = document.getElementById("resultat");

// // 5. On écoute l'événement, "input" ( à chaque fois que l'utilisateur tape)

inputAnnee.addEventListener("input", function() {

     const anneeValeur = inputAnnee.value;

//     // Si ce n'est pas un nombre ou si c'est vide, on nettoie
    if (!anneeValeur || isNaN(anneeValeur)) {
         divResultat.textContent = "";
      return;
    }
// on crée une variable pour stocker le résulat du calcul de l'âge
     const age = calculAge(anneeValeur);
 

// variable pour le message mineur / majeur
let statut;

if (age < 18) {
  statut = "Vous êtes mineur.";
} else {
  statut = "Vous êtes majeur.";
}


const nom = document.getElementById("Nom").value;
const prenom = document.getElementById("Prenom").value;

// Afficher l'âge + le statut
divResultat.textContent =
  "Bonjour"+ " " + nom + " " + prenom + " " + "Tu as " + age + " ans le " + age + " " + "et tu est " + " " + statut;

 });