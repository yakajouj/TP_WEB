saisi = document.getElementById('soumettre')
rouge = document.getElementById('rouge')
bleu = document.getElementById('bleu')
vert = document.getElementById('vert')


petit = document.getElementById('petit')
grand = document.getElementById('grand')

saisi.addEventListener("click", function () {
    jour = document.getElementById('jour').value;
    mois = document.getElementById('mois').value;
    annee = document.getElementById('annee').value;
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        estBissextile = true;
    } else {
        estBissextile = false;
    }

    if (jour == "" || mois == "" || annee == "") {
        alert("Veuillez remplir chaque champs.")
    } else if (jour < 1 || jour > 6) {
        alert("Veuillez saisir un jour valide.")
    } else if (mois < 1 || mois > 12) {
        alert("Veuillez saisir un mois valide.")
    } else if (mois == 2 && jour > 29) {
        alert("Février ne contient pas autant de jours.")
    } else if (mois == 2 && estBissextile == false && jour == 29) {
        alert(annee + "n'est pas une année bissextile.")
    } else if
        (annee < 0) {
        alert("Veuillez saisir une année valide.")
    } else {
        dureeMois = 0
        jourAffiche = []
        semaine1 = []
        semaine2 = []
        semaine3 = []
        semaine4 = []
        semaine5 = []
        switch (mois) {
            case "1":
            case "3":
            case "5":
            case "7":
            case "9":
            case "10":
            case "12":
                dureeMois = 31
                break;
            case "4":
            case "6":
            case "8":
            case "11":
                dureeMois = 30
                break;
            case "2":
                if (estBissextile) {
                    dureeMois = 29
                } else {
                    dureeMois = 28
                }
        }
        for (i = jour; i <= dureeMois; i++) {
            if (semaine1.length < 7) {
                semaine1.push(i);
                document.getElementById('semaine1').innerHTML += "<td class='jourAffiche1'>" + i + "</td>"
            } else if (semaine2.length < 7) {
                semaine2.push(i)
                document.getElementById('semaine2').innerHTML += "<td class='jourAffiche1'>" + i + "</td>"
            } else if (semaine3.length < 7) {
                semaine3.push(i)
                document.getElementById('semaine3').innerHTML += "<td class='jourAffiche1'>" + i + "</td>"
            } else if (semaine4.length < 7) {
                semaine4.push(i)
                document.getElementById('semaine4').innerHTML += "<td class='jourAffiche1'>" + i + "</td>"
            } else {
                semaine5.push(i)
                document.getElementById('semaine5').innerHTML += "<td class='jourAffiche1'>" + i + "</td>"
            }
        }
        document.getElementById('calendrier').style.display = "flex";
        document.getElementById('changement_calendrier').style.display = "inline-block"

        rouge.addEventListener("click", function () {
            if (document.getElementById('calendrier').classList.contains("jourAffiche2")) {
                document.getElementById('calendrier').classList.remove("jourAffiche2");
                document.getElementById('calendrier').classList.add("jourAffiche1");
            } else if (document.getElementById('calendrier').classList.contains("jourAffiche3")) {
                document.getElementById('calendrier').classList.remove("jourAffiche3");
                document.getElementById('calendrier').classList.add("jourAffiche1");
            }
        });

        bleu.addEventListener("click", function () {
            if (document.getElementById('calendrier').classList.contains("jourAffiche3")) {
                document.getElementById('calendrier').classList.remove("jourAffiche3");
                document.getElementById('calendrier').classList.add("jourAffiche2");
            } else if (document.getElementById('calendrier').classList.contains("jourAffiche1")) {
                document.getElementById('calendrier').classList.remove("jourAffiche1");
                document.getElementById('calendrier').classList.add("jourAffiche2");
            }
        });

        vert.addEventListener("click", function () {
            if (document.getElementById('calendrier').classList.contains("jourAffiche2")) {
                document.getElementById('calendrier').classList.remove("jourAffiche2");
                document.getElementById('calendrier').classList.add("jourAffiche3");
            } else if (document.getElementById('calendrier').classList.contains("jourAffiche1")) {
                document.getElementById('calendrier').classList.remove("jourAffiche1");
                document.getElementById('calendrier').classList.add("jourAffiche3");
            }
        });

        petit.addEventListener("click", function () {
            if (document.getElementById('calendrier').classList.contains("tableG")) {
                document.getElementById('calendrier').classList.remove("tableG");
                document.getElementById('calendrier').classList.add("tableP");
            }
        });

        grand.addEventListener("click", function () {
            if (document.getElementById('calendrier').classList.contains("tableP")) {
                document.getElementById('calendrier').classList.remove("tableP");
                document.getElementById('calendrier').classList.add("tableG");
            }
        });
    }
}
)