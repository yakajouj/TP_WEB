const definition = new Map([
    ["dashdance", "Technique consistant à se déplacer rapidement pour rester mobile et difficile à prédire."],
    ["OoS", "Out of Shield - action effectuée directement depuis le bouclier, comme un saut ou une attaque spéciale."],
    ["DI", "Directional influence (Influcence directionelle), direction maintenue par le joueur pour modifier sa trajectoire lors d'une éjection."],
    ["ledgetrap", "Situation où un joueur contrôle les options de retour sur le terrain de son adversaire."],
    ["punish", "Punir une erreur adverse en profitant d'une ouverture laissée."]
]);

const listeDefinition = document.querySelectorAll('.def');

listeDefinition.forEach(function (element) {
    element.addEventListener("mouseover", function() {
        console.log(document.getElementById('principal').style.top)
        creationPopUp(element);
    });

    element.addEventListener("mouseleave", function() {
        document.getElementById('popup').innerHTML = "";
        document.getElementById('popup').style.display = "none";
    });
});

function creationPopUp(element) {
    const rect = element.getBoundingClientRect();
    const popup = document.getElementById('popup');

    popup.style.left = rect.left - 40 + "px";
    popup.style.top  = rect.top - 87 + "px";
    document.getElementById('popup').innerHTML = definition.get(element.innerText);
    document.getElementById('popup').style.display = "inline-block";

}

