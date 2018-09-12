// console.log("Bonjour en JavaScript !");
// console.log("hello world!");
// console.log(3*3);
// console.log(12/0);
// console.log(4+9+78);
// console.log(12-7);
// console.log(5e4);
//
//
// // afficher nom et prenom de l'utilisateur en respectant l'espace
// var nom = prompt("Entrez votre nom:");
// var prenom = prompt ("Entrez votre prénom:");
// alert("Bonjour, " + nom +" " +prenom );
//
// // prévoir les valeurs finales de chaque variable
// var a = 2; //2
// a = a - 1; //1
// a++; //3
// var b = 8; //8
// b += 2; //10
// var c = a + b * b; //103
// var d = a * b + b; // 23
// var e = a * (b + b); //60
// var f = a * b / a; // 10
// var g = b / a * a; //1.66
//
// // calcul de tva
// var ht = Number(prompt("Saisis un prix hors taxes:"));
// var tva = 19.6 / 100;
// var ttc = ht * (1 + tva);
// console.log("Le prix TTC est de :" + ttc + "euros");
//
// // conversion celsius/Fahrenheit
// var tempCe = Number(prompt("Entrez une température en degré celsius:"));
// var tempFar = tempCe * 9 /5 +32;
// console.log(tempCe + "°C = " + tempFar + " °F");
//
// // permutation de deux variables
// var nombre1 = 5;
// var nombre2 = 3;
//
// // Tapez votre code ici (sans rien modifier d'autre !)
// var temp = nombre1;
// var nombre1 = nombre2;
// var nombre2 = temp;
//
// console.log(nombre1); // Doit afficher 3
// console.log(nombre2); // Doit afficher 5
//
// // condition : afficher le nombre s'il est positif
//
// var nombre = Number(prompt("Entrez un nombre:"));
// if(nombre > 0) {
//   console.log(nombre + " " + "est positif");
// }
//
// // remplacer l'opérateur > par >= et modifier le message
// var nombre = Number(prompt("Entrez un nombre:"));
// if(nombre >= 0) {
//   console.log(nombre + " est positif ou nul");
// }
//
// // l'instruction else
// var nombre = Number(prompt("Entrez un nombre:"));
// if(nombre > 0) {
//   console.log(nombre + " est positif");
// }
// else {
//   console.log(nombre + " est négatif ou nul");
// }
//
// // imbriquer des conditions
// var nombre = Number(prompt("Entrez un nombre:"));
// if(nombre > 0){
//   console.log(nombre + "est positif");
// } else {
//   if(nombre < 0){
//     console.log(nombre + "est négatif");
//   } else {
//     console.log(nombre + "est nul");
//   }
// }
//
//  //ou
//  var nombre = Number(prompt("Entrez un nombre:"));
//  if (nombre > 0) {
//    console.log(nombre + "est positif");
//  } else if (nombre < 0) {
//    console.log(nombre + "est négatif");
//  } else {
//    console.log(nombre + " est nul");
//  }
//
//  // l'opérateur logique ET
//  if ((nombre >= 0) && (nombre <= 100)) {
//    console.log(nombre + "est compris entre 0 et 100");
//  }
//
//  // l'opérateur logique OU
//  var nombre = 125;
//  if((nombre < 0) || (nombre > 100)){
//    console.log(nombre + "est en dehors de l'intervalle [0, 100]");
//  }
//
//  // l'opérateur logique NON
//  var nombre = 255;
// if (!(nombre > 100)) {
//   console.log(nombre + " est inférieur ou égal à 100");
// }
//
// // programme sur la tenue à porter en fonction de la météo
// var meteo = prompt("Quel temps fait-il dehors ?");
// if (meteo === "soleil") {
//     console.log("Sortez en t-shirt.");
// } else if (meteo === "vent") {
//     console.log("Sortez en pull.");
// } else if (meteo === "pluie") {
//     console.log("Sortez en blouson.");
// } else if (meteo === "neige") {
//     console.log("Restez au chaud à la maison.");
// } else {
//     console.log("Je n'ai pas compris !");
// }
//
// // programme avec switch
//   var meteo = prompt("quel temps fait-il dehors?");
//   switch (meteo) {
//   case "soleil":
//         console.log("sortez en t-shirt");
//         break;
//   case "vent":
//         console.log("sortez en pull");
//         break;
//   case "pluie":
//         console.log("sortez en blouson");
//         break;
//   case "neige":
//         console.log("restez au chaud à la maison");
//         break;
//   défault:
//         console.log("Je n'ai pas compris!");
//   }
//
// //saisir un nom de jour à l'utilisateur affiche le nom du jour suivant.
// var jour = prompt ("Saisis un jour de la semaine:");
// if (jour === "lundi") {
//   console.log("mardi");
// } else if (jour === "mardi") {
//   console.log("mercredi");
// } else if (jour === "mercredi") {
//   console.log("jeudi");
// } else if (jour === "jeudi") {
//   console.log("vendredi");
// } else if (jour === "vendredi") {
//   console.log("samedi");
// } else if (jour === "samedi") {
//   console.log("dimanche");
// } else if (jour === "dimanche") {
//   console.log("lundi");
// } else {
//   console.log("erreur de saisie");
// }
//
//  // même exercice avec switch
//      var jour = prompt("Saisis un jour de la semaine");
//      switch (jour) {
//        case "lundi":
//             console.log("mardi");
//          break;
//          case "mardi":
//               console.log("mercredi");
//            break;
//            case "mercredi":
//                 console.log("jeudi");
//              break;
//           case "jeudi":
//                 console.log("vendredi");
//           break;
//           case "vendredi":
//                 console.log("samedi");
//             break;
//             case "samedi":
//             console.log("dimanche");
//               break;
//             case "dimanche":
//             console.log("lundi");
//               break;
//        default:
//               console.log("je n'ai pas compris");
//      }
//
//      // comparaison de deux nombres
//      var nombre1 = prompt("Saisissez le premier chiffre:");
//      var nombre2 = prompt("Saisissez le second chiffre:");
//
//      if (nombre1 > nombre2) {
//           console.log(" le nombre 1 est supérieur");
//      } else if (nombre1< nombre2) {
//                 console.log("le nombre deux est inférieur");
//      }else {
//        console.log(" les nombres sont égaux");
//      }
//
//     // baccalaureat
//     var moyenne = prompt("Saisis ta moyenne obtenue au bac:");
//     if (moyenne < 10) {
//         console.log("recalé");
//     } else if ((moyenne > 10) && (moyenne < 12)) {
//               console.log("reçu");
//     } else if ((moyenne >= 12) && (moyenne <= 20)) {
//               console.log("reçu avec mention");
//     } else {
//             console.log("veuillez saisir une moyenne entre 0 et 20");
//     }
//
//     // nombre de jours du mois
//     var mois = Number(prompt("Saisie le numéro d'un mois:"));
//
//     if ((mois >= 1) && (mois <= 12)) {
//     var nbJours = 31;
//     switch (mois) {
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         nbJours = 30;
//         break;
//     case 2:
//         nbJours = 28;
//         break;
//     }
//     console.log("Ce mois comporte " + nbJours + " jours.");
// } else {
//     console.log("Mois non reconnu !");
// }
//
//     // Exercice : afficher l'heure une seconde plus tard
//
//
// var heures = Number(prompt("Entrez les heures :"));
// var minutes = Number(prompt("Entrez les minutes :"));
// var secondes = Number(prompt("Entrez les secondes :"));
//
// if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
//     (secondes >= 0) && (secondes <= 59)) {
//     secondes++; // On incrémente les secondes
//     if (secondes === 60) {
//         // Il faut mettre les secondes à 0 et passer à la minute suivante
//         secondes = 0;
//         minutes++;
//         if (minutes === 60) {
//             // Il faut mettre les minutes à 0 et passer à l'heure suivante
//             minutes = 0;
//             heures++;
//             if (heures === 24) { // L'heure suivante est minuit
//                 heures = 0;
//             }
//         }
//     }
//     console.log("Dans une seconde, il sera " + heures + " heures, " +
//         minutes + " minutes et " + secondes + " secondes");
// } else {
//     console.log("Heure incorrecte !");
// }
//
//   // la boucle while
//   console.log("début du programme");
//   var nombre = 1;
//   while (nombre <= 5) {
//     console.log(nombre);
//     nombre++;
//   }
//   console.log("fin du programme");
//
//   // la boucle for
//   var compteur;
//   for (compteur = 1; compteur <= 5; compteur++) {
//     console.log(compteur);
//   }
//
//   // Écrire un programme qui fait 10 tours de manège
//   for (var tour = 1; tour <=10; tour++){
//     console.log("C'est le tour numéro" +" "+ tour);
//   }
//
//   var tour = 1;
//   while (tour <= 10) {
//     console.log("c'est le tour numéro" + " "+ tour);
//     tour++;
//   }
//
//   var gateau = Number (prompt("Saisissez le nombre de gâteau:"));
//   var tour = 1;
//   while (tour <=gateau) {
//     console.log("c'est le tour numéro" + " " + tour);
//     tour++;
//   }
//
//   //afficher les nombres pairs et impairs
//   for (var i = 1; i <= 10; i++) {
//       if (i % 2 === 0) {
//           console.log(i + " est pair");
//       } else if (i % 2 === 1) {
//           console.log(i + " est impair");
//       }
//   }
//
//   //afficher les nombres pairs et impairs saisi par l'utilisateur
//     var nombre = Number(prompt("Veuillez saisir un nombre:"));
//
//     for (var i = nombre; i < nombre + 10; i++) {
//       if (i % 2 === 0) {
//         console.log(i + "est pair");
//       } else {
//         console.log(i + "est impair");
//       }
//     }
//
//     // contrôle de Saisie : saisir un nombre entre 50 et 100
//
//     var nombre = 0;
//     while ((nombre < 50) || (nombre > 100)){
//           nombre = Number(prompt("Veuillez saisir un nombre:"));
//     }
//
//
//     // Exercice : table de multiplication
//
//     var nombre = 0;
//     while ((nombre < 2) || (nombre > 9)) {
//         nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
//     }
//
//     console.log("Voici la table de multiplication de " + nombre);
//     var i = 1;
//     while (i <= 10) {
//         console.log(nombre + " x " + i + " = " + (nombre * i));
//         i++;
//     }
//
//
//     //Exercice : table de multiplication
//
//     var nombre = 0;
//     while ((nombre < 2) || (nombre > 9)) {
//         nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
//     }
//
//     console.log("Voici la table de multiplication de " + nombre);
//     for (var i = 1; i <= 10; i++) {
//         console.log(nombre + " x " + i + " = " + (nombre * i));
//     }
//
//
//       //Exercice : jeu du ni oui, ni non
//
//
//       var saisie = prompt("Voulez-vous jouer au ni oui, ni non ?");
//       while ((saisie !== "oui") && (saisie !== "non")) {
//           saisie = prompt("Voulez-vous jouer au ni oui, ni non ?");
//       }
//       console.log("Vous avez perdu !");
//
//       // triangle
//       var ligne = "";
//       for (var i = 1; i <= 7; i++) {
//       ligne = ligne + "#";
//       console.log(ligne);
//       }
//
//       // triangle while
//       var ligne = "";
//       var i = 1;
//       while (i <= 7) {
//       ligne = ligne + "#";
//       console.log(ligne);
//       i++;
//       }
    // // affiche les nombres de 1 à 100
    // var i = 1;
    // while ((i>= 1)&& (i<=100)) {
    //     console.log(i);
    //     i++;
    // }
    //
    // // fizzbuzz
    //
    // for (var i = 1; i<=100; i++) {
    //   if ((i % 3 === 0)&& (i % 5 === 0))
    //     console.log("Fizzbuzz");
    //   else if (i % 3 === 0)
    //     console.log("Fizz");
    //   else if (i % 5 === 0)
    //     console.log("Buzzz");
    //   else
    //     console.log(i);
    //   }

      // //fizzbuzz2
      // // Solution construisant le message à afficher par concaténation
      // for (var nombre = 1; nombre <= 100; nombre++) {
      //     var message = "";
      //     if (nombre % 3 === 0) {
      //         message += 'Fizz';
      //     }
      //     if (nombre % 5 === 0) {
      //         message += 'Buzz';
      //     }
      //     if (message === "") {
      //         message = nombre;
      //     }
      //     console.log(message);
      // }


      // Exercices JS : INTRO DÉBUTANT

      // // EXERCICE 1 : HELLO world
      //
      //   console.log("Hello World");
      //
      //   var hello = "Hello World";
      //   console.log(hello);
      //
      // // Exercice 2 : Calculs divers
      // console.log(3*3);
      // console.log(12/0);
      // console.log(4 + 9 + 78);
      // console.log(12 - 7);
      // console.log(5e4);
      //
      // // Exercice 3: Communiquer avec l'ordinateur
      // var nom = prompt("Quel est votre nom?");
      // console.log("Bienvenue" + " "+ nom);
      //
      //  //Exercice 4 : Nom et prénom
       // var nom = prompt ("Quel est votre nom?");
       // var prenom = prompt ("Quel est votre prénom?");
       // console.log("Bonjour"+" "+ nom + " " + prenom);
      //
      //  //Exercice 5 : Des caractères au nombre
      //  var myNumber = "123";
      //  console.log(typeof myNumber);
      //  var myNumber = "123";
      //  console.log(Number(myNumber) );
      //
      //  // Exercice 6:  Majuscules et miniscules
      //  var i = "salut";
      //  console.log(i.toUpperCase());
      //
      //  console.log("HELLO".toLowerCase());
      //
      //  // EXERCICES JS : INTRO AVANCÉS
      //
      //  //Exercice 1: True ou False?
       // var x = "salut";
       // var y = "";
       // if (x.length === 5) {
       //   console.log("true");
       // } else {
       //   console.log("false");
       // }

       // Exercice 2: Calculer mon âge
       // var annee = Number(prompt("Veuillez saisir l'année actuelle:"));
       // var dateN = Number(prompt("Votre année de naissance:"));
       // console.log(Number(prompt("Vous avez"+ " " + (annee - dateN))));

       //Exercice 3 :Problème de chaussures
       // var prix1 = 70;
       // var prix2 = 59;
       // var prix3 = 20;
       // var total = prix1 + prix2 + prix3;
       // var totalR = total * 20/100 ;
       // var totalReduction = total - totalR;
       //
       // console.log(totalReduction);
       //
       // //Exercice 4 : une calculatrice JavaScript
       // var nb1 = Number(prompt("Saisis ton premier chiffre:"));
       // var nb2 = Number(prompt("Saisis ton second chiffre:"));
       // console.log(Number(prompt(nb1 + nb2)));

        // Exercice 5: travailler avec les propriétés

        // var prenom = prompt("Quel est votre prénom?");
        // var nom = prompt ("Quel est votre nom?");
        // var prenom2 = prenom.charAt(0) + prenom.charAt(prenom.length-1);
        // var nom2 = nom.charAt(0) + nom.charAt(nom.length-1);
        //
        // var age = Number(prompt("Quel âge as-tu?"));
        // var age2 = age/33;
        // var age3 = Math.round(age2);
        //
        // console.log(prenom2.toUpperCase()+ nom2.toUpperCase());
        // console.log(age3);

        //EXERCICES JS INTERMÉDIAIRE

        // Exercice 1 : Le nombre le plus grand
        // var nb1 = 10;
        // var nb2 = 12;
        // var nb3 = 42;
        // var nb4 = 50;
        //
        // console.log(Math.max(nb1,nb2,nb3,nb4));

        //Exercice 2: Condition d'âge
        // var age = Number(prompt("Quel âge as tu?"));
        // if (age < 0) {
        //     alert("Saisissez un âge réel");
        // } if (age >= 21) {
        //     alert("Accès autorisé");
        // } if (age %2 === 0) {
        //     alert("Votre âge est pair");
        // }if (Math.sqrt(age)) {
        //     alert("Votre âge est un nombre carré");
        // }

        //Exercice 3 : Le nombre caché
        // var nb1 = 8;
        // var nombre = Number(prompt("Devinez le chiffre caché:"));
        // while(nombre != nb1){
        //     nombre = prompt("Devinez le chiffre caché:");
        //     if (nombre > nb1) {
        //     nombre = prompt("Votre chiffre est trop grand, retentez!");
        //     }
        //      else if (nombre < nb1) {
        //         nombre = prompt("Votre chiffre est trop petit, retentez!");
        //     }
        //     alert("bravo!")
        // }

          // nombre caché test
          // var nbHidden = 8;
          // nbPlayer = Number(prompt("Devine le chiffre caché?"));
          //
          // while (nbPlayer != nbHidden) {
          //   nbPlayer = Number(prompt("Retente!"));
          // }
          // console.log("Gagné");


        // Exercice 4 : Des nombres en boucle

        // var number = 1;
        // while (number<101) {
        //   console.log(number);
        //   number++;
        // }

        // Exercice 5: Des nombres en boucles bis : afficher les chiffres pairs

        // for (var number = 1; number < 101; number++) {
        //   if (number %2 === 0) {
        //     console.log(number);
        //   }
        // }

        // Exercice 6: Remplir la piscine
        // var poolL = Number(prompt("Longueur de la piscine:"));
        // var pooll = Number(prompt("Largeur de la piscine:"));
        // var poolP = Number(prompt("Profondeur de la piscine:"));
        // var poolD = Number(prompt("Débit d'eau"));
        //
        //
        // function pooltime(poolL,pooll,poolP,poolD){
        // var poolSize = poolL * pooll * poolP;
        // var poolT = poolSize/poolD;
        // console.log(poolT + " " + "minutes");
        // }
        //
        // pooltime(poolL,pooll,poolP,poolD);

        //Exercice 7 : Calculs de cercle
        // function perimetre(rayon) {
        // return 2 * rayon * Math.PI;
        // }
        //
        // function aire(rayon) {
        // return Math.pow(rayon, 2) * Math.PI;
        // }
        //
        // var r = Number(prompt("Entrez le rayon d'un cercle :"));
        // console.log("Son périmètre vaut " + perimetre(r));
        // console.log("Son aire vaut " + aire(r));

        //Exercice 8 : Une pyramide
        // var star = "";
        // for (var line = 1; line <= 5; line++) {
        //     star = star + "*";
        //     console.log(star);
        // }


        // Exercice 9 : FIZZ BUZZ
        //
        // for (var number = 1; number < 101; number++) {
        //   if (number %3 === 0) {
        //       console.log("FIZZ");
        //   } if (number %5 === 0) {
        //       console.log("BUZZ");
        //   } if ((number %3 === 0)&& (number %5 === 0)) {
        //       console.log("FIZZBUZZ");
        //   }
        //   console.log(number);
        // }

        // EXERCICES JS INTERMÉDIAIRE PARTIE 2

        // Exercice 1 : Un échiquier
        //
        // var str = "";
        //
        // for (var i = 0 ; i < 8; i++) {
        //   for (var j = 0; j < 16; j++) {
        //     if ((i+j) % 2 === 0 ) {
        //       str += "#";
        //     }else {
        //       str += " ";
        //     }
        //   }
        //   str += "\n";
        // }
        // console.log(str);

        //Exercice 2 : Matrix dans la console

          // for(i=0; i<4;i++){
          //     for(j=0; j<4; j++){
          //       if(i===j){
          //         console.log(1);
          //       } else{
          //         console.log (0);
          //       }
          //     }
          //   console.log("____");
          // }

          //Exercice 3: Nombre pair?

        //   var choix1 = Number(prompt("Combien y a til d'articles dans votre panier?"))
        //     function purchase(choix1) {
        //       if (Math.max(choix1) %2 === 0) {
        //         console.log(Math.max(choix1) + " "+"pair");
        //       } else {
        //         console.log( Math.max(choix1) + " "+ "impair");
        //       }
        //     }
        //
        // purchase(choix1);

        //Exercice 4 : Vous avez dit factorielle?
          //
          // function factorial(num) {
          //       var result = 1;
          //       for (var i = 1; i <= num; i++) {
          //         result = result * i;
          //
          //       }
          //       return result;
          // }
          //     var test = factorial(4);
          //     console.log(test);

        // Exercice 5 : Les tirets ça compte!

        // Exercice 8 : Le max d'un tableau

        

        // Exercice 9: une to do List
            var Listes = [];
            var mot = "";

            while (mot !== "fin") {
                mot = prompt("Entrez un mot ou tapez fin pour arrêter :");
                if (mot !== "fin") {
                    Listes.push(mot);
                }
            }

            Listes.forEach(function (mot) {
                console.log(mot);
            });

        // Exercice 10: Un jeu en JavaScript

       //
       // var userScore = 0;
       // var pcScore = 0;
       //
       // while ((userScore < 3) && (pcScore < 3)) {       //the game stops at three points
       //
       //        // user choice
       //        var userChoice = prompt("pierre, feuille ou ciseaux?").toLowerCase();
       //        console.log("Vous" + " " + userChoice);
       //
       // while ((userChoice != "pierre") && (userChoice != "feuille") && (userChoice != "ciseaux")) {
       //
       //        userChoice = prompt("Erreur de saisie :pierre, feuille ou ciseaux?");
       //   }
       //
       //      //  computer choice
       //       var computer = ["pierre", "feuille", "ciseaux"];
       //       var computerChoice = computer[Math.floor(Math.random()*computer.length)];
       //       console.log("Ordinateur" + " " + computerChoice);
       //
       //
       //      // compare user and computer choice
       //       if (userChoice === computerChoice) {   // equality
       //         alert("Egalité");
       //       }
       //
       //       else if ((userChoice === "pierre") && (computerChoice === "ciseaux")) {  // user win
       //           alert("Gagné");
       //           userScore++;
       //        } else if ((userChoice === "pierre") && (computerChoice === "feuille")) { // user loose
       //                  alert("Perdu");
       //                  pcScore++;
       //         } else if ((userChoice === "feuille") && (computerChoice === "pierre")) { // user win
       //                    alert("Gagné!");
       //                    userScore++;
       //            } else if ((userChoice === "feuille") && (computerChoice === "ciseaux")) {  // user loose
       //                      alert("Perdu!")
       //                      pcScore++;
       //              } else if ((userChoice === "ciseaux")&&(computerChoice === "feuille")) { // user win
       //                      alert("Gagné");
       //                      userScore++;
       //              } else if ((userChoice === "ciseaux") && (computerChoice === "pierre")) { // user loose
       //                      alert("Perdu!")
       //                      pcScore++;
       //                  }
       //      }
       //
       //        // final message
       //         if (userScore === 3) {
       //           alert("Bravo! Tu as gagné!")
       //         } else {
       //           alert("aie aie aie! Dommage!")
       //         }


        // Exercice 11 : compter le nombre de caractère

      //   var str = prompt("Saisis une phrase:");
      //   var letter = prompt("Saisis une lettre de l'alphabet:");
      // function CharacterNumber(str,letter) {
      //   console.log(str.length);
      //   console.log(letter.length);
      //   if (letter.length<= 1) {
      //     console.log(letter);
      //   }else{
      //     prompt("Veuillez saisir une seule lettre de l'alphabet");
      //
      //   }
      //   if ((letter === a)||(letter === b) ||(letter === c)|| (letter === d) || (letter === e) || (letter === d)) {
      //     console.log(letter);
      //   }else {
      //     console.log("erreur, veuillez saisir une lettre de l'alphabet");
      //   }
      // }
      //  CharacterNumber(str,letter);
