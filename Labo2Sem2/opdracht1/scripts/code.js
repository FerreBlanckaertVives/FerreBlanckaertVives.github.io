const setup = () => {

     window.alert("dit is een mededeling");

     let zeker = window.confirm("weet u het zeker");
     console.log(zeker);

     let naam = window.prompt("wat is uw naam", "onbekend");
     console.log(naam);


}
window.addEventListener("load", setup);