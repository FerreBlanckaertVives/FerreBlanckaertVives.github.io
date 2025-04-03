let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    let lstLines = document.querySelectorAll(`input[type = text]`);

    let persoon = {
        voornaam : lstLines[0].value,
        familienaam : lstLines[1].value,
        Geboortedatum: lstLines[2].value,
        Email: lstLines[3].value,
        AantalKinderen: lstLines[4].value
    }
    console.log(persoon);
    lstLines.forEach((line) => {
        line.value = "";
    })
    personen.push(persoon);





    // for(let i = 0; i < lstLines.length; i++) {
    //     console.log(lstLines[i]);
    //     lstLines[i].input = "";
    // }

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();



    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");


    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);