let input1 = "";
let input2 = "";
let point = 0;
let verrouille = false;
let tableauImage = new Array(21).fill(null);

const listeImage = ["img1.png", "img2.png", "img3.png",
    "img4.png", "img5.png", "img6.png", "img7.png",
    "img8.png", "img9.png", "img10.png"];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < listeImage.length; i++) {
    for (let j = 0; j < 2; j++) {
        let index = getRandomArbitrary(1, 20);
        while (tableauImage[index] !== null) {
            index = getRandomArbitrary(1, 20);
        }
        tableauImage[index] = listeImage[i];
    }
}

const imageControle = document.querySelectorAll('.affichage');

imageControle.forEach(function (element) {
    element.addEventListener("click", function () {
        if (verrouille == true) return;
        if (element.classList.contains("imgclique")) return;

        const id = parseInt(element.id);
        const nomImage = tableauImage[id];

        element.innerHTML = "<img src='Assets/Image/" + nomImage + "' alt=''>";
        element.classList.remove("affichage");
        element.classList.add("imgclique");

        if (input1 === "") {
            input1 = [element.innerHTML, element.id];
        } else {
            input2 = [element.innerHTML, element.id];
            verrouille = true;
            verification();
        }
    });
});

const restart = document.getElementById('restart');
restart.addEventListener("click", function () {
    location.reload();
});

function verification() {
    if (input1[0] === input2[0]) {
        document.getElementById('reponse').innerHTML = "Bonne réponse !";
        point++;
        input1 = "";
        input2 = "";
        setTimeout(function () {
            verrouille = false;
        }, 1500);


        if (point === 10) {
            setTimeout(function () {
                document.getElementById('reponse').innerHTML = "Bravo ! Vous avez trouvé toutes les cartes !";
                restart.style.display = "inline-block";
            }, 500);
        } else {
            setTimeout(function () {
                document.getElementById('reponse').innerHTML = "Choisissez les 2 cartes à retourner.";
            }, 1500);
        }
    } else {
        document.getElementById('reponse').innerHTML = "Mauvaise réponse !";
        const id1 = input1[1];
        const id2 = input2[1];
        input1 = "";
        input2 = "";

        setTimeout(function () {
            document.getElementById(id1).classList.replace("imgclique", "affichage");
            document.getElementById(id1).innerHTML = "<img src='Assets/Image/img0.png' alt=''>";
            document.getElementById(id2).classList.replace("imgclique", "affichage");
            document.getElementById(id2).innerHTML = "<img src='Assets/Image/img0.png' alt=''>";
            document.getElementById('reponse').innerHTML = "Choisissez les 2 cartes à retourner.";
            verrouille = false;
        }, 1500);
    }
}