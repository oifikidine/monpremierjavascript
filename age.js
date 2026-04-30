// // 1. On définit l'année actuelle
// const anneeActuelle = 2025;

// // 2. Fonction pour calculer l'âge
// function calculAge(anneeNaissance) {
//     return anneeActuelle - anneeNaissance;
// }

// // 3. On récupère l'input de saisie
// const inputAnnee = document.getElementById("anneeNaissance");

// // 4. On récupère la div résultat
// const divResultat = document.getElementById("resultat");

// // 5. On écoute l'événement, "input" ( à chaque fois que l'utilisateur tape)

// inputAnnee.addEventListener("input", function() {

//     const anneeValeur = inputAnnee.value;

//     // Si ce n'est pas un nombre ou si c'est vide, on nettoie
//     if (!anneeValeur || isNaN(anneeValeur)) {
//         divResultat.textContent = "";
//         return;
//     }
// on crée une variable pour stocker le résulat du calcul de l'âge
//     const age = calculAge(anneeValeur);

//     // Afficher l'âge
//     divResultat.textContent =
//         "Tu as " + age + " ans en " + anneeActuelle + ".";
// });


// ICI COMMENCE L'EXERCICE SUIVANT

  // 1. Récupérer le formulaire

//   const formulaire = document.getElementById("formAge");


//   // 2. Écouter le clic sur "Valider"

//   formulaire.addEventListener("boutonValider ", function (event) {
//     event.preventDefault();//empêche le rechargement


//     // 3. Récupérer les valeurs saisies
//     const nom = document.getElementById("Nom").value;
//     const prenom = document.getElementById("Prenom").value;
//     const anneeDeNaissance = document.getElementById().value;  
//   });

/* je récupère un élement (une balise) situé dans le fichier HTML (age.html). J'utilise l'identifiant pour trouver le bon éléments. L'élément récupéré est ensuite stocké dans la variable elementBoutonValider
*/
  let elementBoutonValider = document.getElementById("boutonValider");

  
 
    //  j'affiche l'élément récupéré dans la console.
    console.log( elementBoutonValider.clientHeight);


    let elementInputNom = document.querySelector("#Nom");

    


    // je récupère l'élement 
    let elementDivRecensement = document.querySelector("#recensement");

    console.log(elementDivRecensement);

    let elementDivP = document.querySelector("#paragraphe");

    console.log(elementDivP);

 


// je récupère la liste des communes de Mayotte, 
// puis je stocke les communes dans la variable elementListCommunes
let elementListCommunes = document.querySelector("#listCommunes");


// j'affiche l'élément récupèrer dans la console.
console.log(elementListCommunes);

for (let i = 0; i < elementListCommunes.Height; i= i+1) {
  console.log(elementListCommunes [i]);
}

let elementClassCommune = document.querySelectorAll(".commune");

console.log(elementClassCommune);




 for (let i = 0; i< elementClassCommune.length; i= i+1) {
   console.log(elementClassCommune [i]);
   console.log(elementClassCommune [i].textContent);
}

/*
* J'insère des balises dans le fichier HTML au code Javascript 
 */

// je crée élément (balise) nommé <section>
let elementSection = document.createElement("section");

let elementBody = document.querySelector("body");

elementBody.appendChild(elementSection);


let nouveauTitre = document.createElement("h3");

nouveauTitre.textContent = "Mon titre de la section";

elementSection.appendChild(nouveauTitre);

// je créé une balise (maman)
let elementMaman = document.createElement("maman");

// je rajoute une balise enfant à mon body nommer (maman)
elementBody.appendChild(elementMaman);

let titreDeNiveau3 = document.createElement("h3");

titreDeNiveau3.textContent = "Bonjour maman";

elementMaman.appendChild(titreDeNiveau3);

let img = document.createElement("img");
img.src= "rocks.jpg";
img.setAttribute("alt", "Le vrai roi des pirates Alias Rocks D Xebec");
img.className = "Image-rocks";
img.classList.add("image","image3");
img.classList.remove("image3");
elementBody.appendChild(img);







