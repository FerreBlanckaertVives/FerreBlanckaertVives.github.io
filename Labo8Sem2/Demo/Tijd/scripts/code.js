const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    console.log(start.getDay());

    console.log(start.getMonth()+1);

    console.log(start.getFullYear());

    console.log(start.getDate());





    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());



    let datum = new Date(2025, 0, 1);

    console.log(datum);

    let event = new Date();

    console.log(event.toISOString());

    console.log(event.toDateString());
    console.log(event.toTimeString());


    let geboortedatum = new Date(2005, 11, 12);

    let hoeveelheid = event - geboortedatum;

    let sec = hoeveelheid / 1000;

    let minuten = sec / 60;

    let uren = minuten / 60;

    let dagen = uren /24;
    console.log(dagen);

    console.log(hoeveelheid);






}
window.addEventListener("load", setup);