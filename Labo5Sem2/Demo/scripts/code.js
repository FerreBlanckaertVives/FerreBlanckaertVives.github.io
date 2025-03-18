const setup = () => {
    let image = document.getElementById('imgPhoto');
    image.addEventListener('mouseover',change);

}

const change = () =>
{
    let image = document.getElementById('imgPhoto');

    image.src = "./images/kat.jpg";
}

window.addEventListener("load", setup);