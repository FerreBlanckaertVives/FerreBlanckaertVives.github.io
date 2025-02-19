const setup = () => {
let familieLeden = ['lid1', 'lid2', 'lid3', 'lid4', 'lid5'];
console.log(familieLeden.length);

for (let i = 0; i < familieLeden.length; i++) {
    if(i % 2 === 0) {
        console.log(familieLeden[i]);
    }

}

voegNaamToe(familieLeden);

}
window.addEventListener("load", setup);

const voegNaamToe = (leden) =>
{
    let extraNaam = prompt('Wat is de extra naam');
    leden.push(extraNaam);
    console.log(leden);
}