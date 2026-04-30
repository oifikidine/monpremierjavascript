//Ici, je rédige mon script javascript
let nom= "Oifikidine" 
        let prenom= "Mohamed"
        let age= 12;
        let prix= 12.50;
        const nombreDecimal= 3.4123;
        const nombreNegatif= -509;
        const nombreFraction= 1/3;
        let salutation= "Bonjour les gens";
        let greeting= 'Good morning';
        let andabu= 'kwezi';
        let commune= "M'tsamboro";
        let village= 'M\'tsahara';
        let vrai= true;
        let est_faux=false;

        //je crée une variable de type array qui est un tableau dans lequel je vais mettre les noms de tous les élèves de ma classe.
        let eleve= ["Oifikidine","Madi-solihi","Mchangama","Houmadi","Mohamed","Said","Anli","Mohamed Ahamada","Chamsidine","Malidi Mlimi","Moussa","Mahamoudou","Fougeroux"];

        // je demande l'affichage de tous les éléement de mon tableau.
        console.log(eleve);

        // je demande l'affichage de l'élève numéros 0 de mon tableau.C'est à dire le premier membre du tableau.
        console.log(eleve [0]);

        // je demande l'affichage de l'élève numéros 1 de mon tableau.C'est à dire le deuxième membre du tableau.
        console.log(eleve [1]);

        // je demande l'affichage de l'élève numéros 2 de mon tableau.C'est à dire le troisième membre du tableau.
        console.log(eleve [2]);

        let client= {
            nom: "Bacar",
            village: "Choungui",
            age: 25,
            scores: [4,7,2]
        };

        console.log(client);
        console.log(client.village);

        console.log(client.age);
        console.log(client.nom);

        console.log(client.scores[0]);
        console.log(client.scores[1]);
        console.log(client.scores[2]);


        console.log(vrai);

        console.log(est_faux);
        console.log(salutation);

        console.log(greeting);
        console.log(andabu);

        console.log(commune);
        console.log(village);

        console.log("Bonjour, je m'appelle",nom,prenom ," et j'ai ",age, "ans","et j'aimerais acheter un bonbon de",prix,"centimes" );
        console.log("nombre Décimal: ", nombreDecimal);

        console.log("nombre négatif:", nombreNegatif);
        console.log("nombre Fraction:", nombreFraction);

     