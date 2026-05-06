depotdev = document.getElementById('soumettre');

depotdev.addEventListener("click", function () {
    nom = document.getElementById('nom').value;
    prenom = document.getElementById('prenom').value;
    adresse = document.getElementById('adresse').value;
    email = document.getElementById('email').value;
    superficie = parseFloat(document.getElementById('superficie').value);
    epaisseur = parseInt(document.getElementById('epaisseur').value);
    telephone = document.getElementById('tel').value;
    valide = document.getElementById('valide');
    
    if (nom == "" || prenom == "" || adresse == "" || email == "" || superficie == "" || epaisseur == "" || telephone == "") {
        alert("Veuillez remplir tous les champs.")
    } else if (email.includes("@") == false) {
        alert("Veuillez rentrer un email valide.")
    } else if (telephone.match(/[0-9]{10}/) == false) {
        alert("Veuillez saisir un numéro de téléphone valide.")
    } else if (superficie < 0) {
        alert("Veuillez saisir une superficie valide.")
    } else if (epaisseur < 35) {
        alert("Veuillez saisir une épaisseur d'au moins 35 centimètres.")
    }
    else if (confirm("Confirmez-vous les éléments que vous avez saisis ? \nNom : " + nom + "\nPrénom : " + prenom + "\nAdresse : " + adresse + "\nEmail : " + email + "\nSuperficie : " + superficie + "\nEpaisseur : " + epaisseur + "\nTéléphone : " + telephone)) {
        calcul_devis()
    }
})

function calcul_devis() {
    superficie_camion = 9;
    prix_m_carre_beton = 91;
    prix_camion = 140;
    console.log((epaisseur))
    console.log((superficie))
    m_cube_beton = superficie * epaisseur / 100;
    qte_camion = Math.ceil(m_cube_beton / superficie_camion)
    beton_livre = qte_camion * superficie_camion;

    prix_beton_HT = beton_livre * prix_m_carre_beton;
    prix_camion_HT = qte_camion * prix_camion;
    prix_total_HT = prix_camion_HT + prix_beton_HT;
    prix_total_TTC = prix_total_HT * 1.2;
    tva = prix_total_TTC - prix_total_HT
    const date = new Date()
    console.log(date)
    document.getElementById('num_devis').innerHTML += (Math.random() * 1000).toFixed(0) 
    document.getElementById('devis').style.display = "inline-block";
    document.getElementById('date').innerHTML += date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()  ;
    document.getElementById('attention').innerHTML += prenom + " " + nom;
    document.getElementById('adresse_client').innerHTML += adresse;
    document.getElementById('email_client').innerHTML += email;
    document.getElementById('tel_client').innerHTML += telephone;
    document.getElementById('qte_beton').innerHTML = beton_livre + " tonne(s) de béton (" + m_cube_beton + "m³ de surface)";
    document.getElementById('prix_beton_ht').innerHTML = prix_beton_HT.toFixed(2) + "€"; 
    document.getElementById('qte_camion').innerHTML = qte_camion;
    document.getElementById('prix_camion_ht').innerHTML = prix_camion_HT + "€";
    document.getElementById('soustotal').innerHTML += prix_total_HT.toFixed(2) + "€";
    document.getElementById('total').innerHTML += prix_total_TTC.toFixed(2) + "€";
    document.getElementById('tva').innerHTML += tva.toFixed(2) + "€";
}
