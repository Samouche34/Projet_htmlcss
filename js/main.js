document.addEventListener("DOMContentLoaded", function() {


    const formulaire = document.getElementById("formulaire-inscription");

    const nomInput = document.getElementById("nom");
    const prenomInput = document.getElementById("prenom");
    const nationaliteSelect = document.getElementById("nationalite");
    const emailInput = document.getElementById("email");
    const mdpInput = document.getElementById("motdepasse");
    const confirmInput = document.getElementById("confirmation");


    nomInput.addEventListener('input', function() {
        if (nomInput.value.trim() === "") {
            afficherErreur("erreur-nom", "Le nom est obligatoire.");
        } else {
            effacerErreur("erreur-nom");
        }
    });


    prenomInput.addEventListener('input', function() {
        if (prenomInput.value.trim() === "") {
            afficherErreur("erreur-prenom", "Le prénom est obligatoire.");
        } else {
            effacerErreur("erreur-prenom");
        }
    });


    nationaliteSelect.addEventListener('change', function() {
        if (nationaliteSelect.value === "") {
            afficherErreur("erreur-nationalite", "Veuillez choisir une nationalité.");
        } else {
            effacerErreur("erreur-nationalite");
        }
    });


    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() === "") {
            afficherErreur("erreur-email", "L'email est obligatoire.");
        } else {
            effacerErreur("erreur-email"); 
        }
    });


    mdpInput.addEventListener('input', function() { 
        if (mdpInput.value === "") {
            afficherErreur("erreur-motdepasse", "Le mot de passe est obligatoire.");
        } else {
            effacerErreur("erreur-motdepasse"); 
        }
    });

    confirmInput.addEventListener('input', function() { 
        if (confirmInput.value === "") {
            afficherErreur("erreur-confirmation", "La confirmation est obligatoire.");
        } else {
            effacerErreur("erreur-confirmation"); 
        }
    });


    const radiosCivilite = document.querySelectorAll('input[name="civilite"]');
    radiosCivilite.forEach(radio => {
        radio.addEventListener('change', function() { effacerErreur("erreur-civilite"); });
    });


    const checkboxSports = document.querySelectorAll('input[name="sports"]');
    checkboxSports.forEach(box => {
        box.addEventListener('change', function() {
            const sportsCoches = document.querySelectorAll('input[name="sports"]:checked');
            if (sportsCoches.length < 2) {
                afficherErreur("erreur-sports", "Sélectionnez au moins 2 sports.");
            } else {
                effacerErreur("erreur-sports");
            }
        });
    });



    formulaire.addEventListener("submit", function(event) {
        
        event.preventDefault(); 
        let toutEstValide = true;


        if (nomInput.value.trim() === "") {
            afficherErreur("erreur-nom", "Le nom est obligatoire.");
            toutEstValide = false;
        }


        if (prenomInput.value.trim() === "") {
            afficherErreur("erreur-prenom", "Le prénom est obligatoire.");
            toutEstValide = false;
        }


        const civilite = document.querySelector('input[name="civilite"]:checked');
        if (!civilite) {
            afficherErreur("erreur-civilite", "Veuillez choisir une civilité.");
            toutEstValide = false;
        }


        if (nationaliteSelect.value === "") {
            afficherErreur("erreur-nationalite", "Veuillez choisir une nationalité.");
            toutEstValide = false;
        }


        const email = emailInput.value;
        const positionAt = email.indexOf("@");
        const positionPoint = email.lastIndexOf(".");
        if (positionAt < 1 || positionPoint < positionAt + 2 || positionPoint + 2 >= email.length) {
            afficherErreur("erreur-email", "Format invalide (ex: nom@domaine.com)");
            toutEstValide = false;
        }


        if (mdpInput.value.length < 8) {
            afficherErreur("erreur-motdepasse", "8 caractères minimum requis.");
            toutEstValide = false;
        }
        
        if (mdpInput.value !== confirmInput.value) {
            afficherErreur("erreur-confirmation", "Les mots de passe ne correspondent pas.");
            toutEstValide = false;
        }


        const sportsCoches = document.querySelectorAll('input[name="sports"]:checked');
        if (sportsCoches.length < 2) {
            afficherErreur("erreur-sports", "Sélectionnez au moins 2 sports.");
            toutEstValide = false;
        }


        if (toutEstValide) {
            alert("Formulaire validé avec succès !");

        }
    });
});


function afficherErreur(id, message) {
    const el = document.getElementById(id);
    el.innerText = message;
    el.style.display = "block";
}

function effacerErreur(id) {
    const el = document.getElementById(id);
    el.innerText = "";
    el.style.display = "none";
}
