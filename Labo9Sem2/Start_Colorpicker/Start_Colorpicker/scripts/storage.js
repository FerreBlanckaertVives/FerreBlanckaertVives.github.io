

const storeSliderValues = () => {
    localStorage.setItem("red", document.getElementById("sldRed").value);
    localStorage.setItem("green", document.getElementById("sldGreen").value);
    localStorage.setItem("blue", document.getElementById("sldBlue").value);


};

const restoreSliderValues = () => {
    let red = localStorage.getItem("red")  ;
    let green = localStorage.getItem("green")  ;
    let blue = localStorage.getItem("blue");

    document.getElementById("sldRed").value = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value = blue;

    update();

};

const storeSwatches = () => {
    let swatches = document.querySelectorAll("#swatchComponents .swatch");
    let swatchData = [];

    for (let i = 0; i < swatches.length; i++) {
        let swatch = swatches[i];
        swatchData.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        });
    }

    localStorage.setItem("swatches", JSON.stringify(swatchData));
};


const restoreSwatches = () => {

    let swatches = JSON.parse(localStorage.getItem("swatches") ) ;


    for(let i = 0; i<swatches.length; i++) {
        addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue);
    }

    update();



};

