const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[0].addEventListener("change", update);
        sliders[0].addEventListener("input", update);
    }


}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let rednmb = document.getElementById("lblRed");

    let value=sliders[0].value;
    console.log(value);
    rednmb.innerHTML = value;
}
window.addEventListener("load", setup);