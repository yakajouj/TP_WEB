const debutCoupe = 1781204400000;
heureActuelle = Date.now()

tempsRestant = (debutCoupe - heureActuelle) / 1000
    jourRestant = tempsRestant / 86400;
    heureRestante = tempsRestant % 86400 / 3600;
    minuteRestante = tempsRestant % 86400 % 3600 / 60;
    secondeRestante = tempsRestant % 86400 % 3600 % 60;
    
    document.getElementById("jour").innerHTML = Math.floor(jourRestant);
    document.getElementById("heure").innerHTML = Math.floor(heureRestante);
    document.getElementById("minute").innerHTML = Math.floor(minuteRestante);
    document.getElementById("seconde").innerHTML = Math.ceil(secondeRestante);

setInterval(function() {
    heureActuelle = Date.now()
    tempsRestant = (debutCoupe - heureActuelle) / 1000
    jourRestant = tempsRestant / 86400;
    heureRestante = tempsRestant % 86400 / 3600;
    minuteRestante = tempsRestant % 86400 % 3600 / 60;
    secondeRestante = tempsRestant % 86400 % 3600 % 60;
    
    document.getElementById("jour").innerHTML = Math.floor(jourRestant);
    document.getElementById("heure").innerHTML = Math.floor(heureRestante);
    document.getElementById("minute").innerHTML = Math.floor(minuteRestante);
    document.getElementById("seconde").innerHTML = Math.ceil(secondeRestante);
}, 1000)