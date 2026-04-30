 // manipulation des dates en javascript

//je déclare une variable "date" qui est une instance de l'objet Date()




const date = new Date();
console.log("Ma date : ", date);

 let anneeEnCours = date.getFullYear();

console.log("Année en cours : ", anneeEnCours);

 let moisActuelle = date.getMonth();

 console.log("Mois en cours :" , moisActuelle)

 let joursEnCours = date.getDate();

 console.log("jours en cours :", joursEnCours);

let spanDate = document.getElementById("date");

spanDate.textContent = anneeEnCours;

 let spanMois = document.getElementById("mois");

 spanMois.textContent = moisActuelle;

 let dateComplete = document.getElementById("dateComplete");

  dateComplete.textContent = date.toLocaleDateString();


 /************************************************************
//  * GESTION DES HORLOGES MONDIALES (Mayotte, Paris, Tokyo)
//  * 
//  * Objectif :
//  * - Récupérer l'heure actuelle
//  * - L'afficher dans différentes villes
//  * - Mettre à jour l'heure automatiquement chaque seconde
//  ************************************************************/


// /**
//  * Cette fonction sert à afficher et mettre à jour
//  * l'heure de chaque ville.
//  * Elle sera appelée toutes les secondes.
//  */
 function afficherHeures() {


//    * Objet de configuration pour le format de l'heure
//    * - hour   : heures sur 2 chiffres (ex: 09)
//    * - minute : minutes sur 2 chiffres (ex: 04)
//    * - second : secondes sur 2 chiffres (ex: 07)
//    */
  const options = {
    hour: "2-digit",
     minute: "2-digit",
    second: "2-digit"
   };

//   /* =====================================================
//      MAYOTTE
//      ===================================================== */

//   // Sélection de l'élément HTML qui affichera l'heure de Mayotte
  const heureMayotte = document.getElementById("heureMayotte");

//   // Création de l'heure actuelle au fuseau horaire de Mayotte
   const tempsMayotte = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    second: "2-digit",
                   // On applique le format défini plus haut
    timeZone: "Indian/Mayotte"  // Fuseau horaire de Mayotte
   });

//   // Insertion de l'heure calculée dans le HTML
   heureMayotte.textContent = tempsMayotte;


//   /* =====================================================
//      PARIS
//      ===================================================== */

//   // Sélection de l'élément HTML qui affichera l'heure de Paris
   const heureParis = document.getElementById("heureParis");

  // Création de l'heure actuelle au fuseau horaire de Paris
  const tempsParis = new Date().toLocaleTimeString("fr-FR", {
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",                                 // Format HH:MM:SS
     timeZone: "Europe/Paris"   // Fuseau horaire de Paris
   });

//   // Affichage de l'heure dans la page
  heureParis.textContent = tempsParis;


//   /* =====================================================
//      TOKYO
//      ===================================================== */

//   // Sélection de l'élément HTML qui affichera l'heure de Tokyo
   const heureTokyo = document.getElementById("heureTokyo");

//   // Création de l'heure actuelle au fuseau horaire de Tokyo
  const tempsTokyo = new Date().toLocaleTimeString("fr-FR", {
     hour: "2-digit",
     minute: "2-digit",
    second: "2-digit",
//              // Même format d'heure
     timeZone: "Asia/Tokyo"    // Fuseau horaire de Tokyo
  });

//   // Affichage de l'heure de Tokyo dans le HTML
   heureTokyo.textContent = tempsTokyo;
 }


// /* =====================================================
//    MISE À JOUR AUTOMATIQUE
//    ===================================================== */

// // Appel immédiat de la fonction pour afficher l'heure dès le chargement
 afficherHeures();

// /*
//  * setInterval permet d'exécuter une fonction
//  * de manière répétée à un intervalle donné.
//  * 
//  * Ici :
//  * - afficherHeures → fonction exécutée
//  * - 1000 ms → toutes les 1 seconde
//  */
 setInterval(afficherHeures, 1000);





