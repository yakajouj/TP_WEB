depot = document.getElementById("soumettre");
listeInscrit = [];

depot.addEventListener("click", function() {
    prenom = document.getElementById('prenom').value;
    nom = document.getElementById('nom').value;
    etude = document.getElementById('etude').value;

    if (prenom == "" || nom == "" || etude == "") {
        alert("Veuillez compléter votre saisie.")
    } else if (etude != "Bac pro" && etude != "Générale" & etude != "STMG" && etude != "STI") {
        alert("Veuillez saisir une étude suivie valide.")
    } else if (dejaInscrit(prenom, nom, etude) == "deja_inscrit") {
        alert("Vous êtes déjà inscrit sur la liste. Si vous souhaitez modifier votre saisie, veuillez changer l'étude")
    } else if (dejaInscrit(prenom, nom, etude) == "nv_etude") {
        document.getElementById(prenom+nom).innerHTML = "<tr id='" + prenom + nom + "'><td>" + prenom + "</td><td>" + nom + "</td><td>" + etude + "</td></tr>"
    } else {
        document.getElementById('tableau').style.display = "flex"
        listeInscrit.push([prenom, nom, etude])
        document.getElementById('table').innerHTML += "<tr id='" + prenom + nom + "'><td>" + prenom + "</td><td>" + nom + "</td><td>" + etude + "</td></tr>"
        }
    }
)

function dejaInscrit(prenom, nom, etude) {
    for (let i = 0; i < listeInscrit.length; i++) {
        if (listeInscrit[i][0] == prenom && listeInscrit[i][1] == nom && listeInscrit[i][2] == etude) {
            return "deja_inscrit";
        } else if (listeInscrit[i][0] == prenom && listeInscrit[i][1] == nom && listeInscrit[i][2] != etude) {
            return "nv_etude";
        }
    }
    return "pas_inscrit";
}