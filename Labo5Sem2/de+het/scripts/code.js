const setup = () => {

    let text = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    let searchtext = "de";

    let replacement = "het";

    let nieuweTekst = text.split(" ");
    for (let i = 0; i < nieuweTekst.length; i++) {
        if(nieuweTekst[i].toLowerCase() === searchtext) {
            nieuweTekst[i] = replacement;
        }
    }

    let string ="";

    for (let i = 0; i < nieuweTekst.length; i++) {
        string += nieuweTekst[i] + " ";
    }
    console.log(string);
}

window.addEventListener("load", setup);