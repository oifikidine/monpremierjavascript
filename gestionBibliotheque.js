 let totalLivres= 500;

        console.log(totalLivres);
        
        totalLivres+= 50
        totalLivres-= 10
        totalLivres+= 5

        console.log(totalLivres);

        let affichageTotalLivres="La bibliothèque contient " 
        affichageTotalLivres+= totalLivres
        affichageTotalLivres+= ' livres au total. '

        console.log(affichageTotalLivres);


          let joueurProfessionnel={
            nom: "Zinedine Yazid Zidane",
            nationalite: "Française et Algerienne",
            dateDeNaissance: [23,6,1972],
            taille: 1.85,
            piedFort: "droit",
            poste: "Milieux offensive",
       };

       console.log(joueurProfessionnel);
       console.log(joueurProfessionnel.nationalite);

       // je crée un objet nommer personnage politique dans laquel je vais mettre plusieur variable conttenant les information du personnage politique Estelle Youssouffa

       let personnagePolitique={
           nom: "Estelle Youssouffa", // la propriété nom désigne le nom du personnage politique
           poste:"Député",
           dateDeNaissance: "31 juillet 1978",
           nationalité: "Française", 
           lieuDeNaissance: "Châtenay-Malabry",
           partiPolitique: "UDI",
           profession: "Journalist",  
       };

       console.log(personnagePolitique);