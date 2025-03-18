const setup = () => {
    let cities = [];
    let text;
    const list = document.getElementById('lijst');

    while(true) {
        text = prompt("gemeente");
        if(text !== 'stop')
        {
            cities.push(text);
        }
        else
        {
            break;
        }

    }


    cities.forEach((city) => {
        list.add(new Option(city));
    })
    cities.sort((a, b) => a.localeCompare(b));
    console.log(cities);


}
window.addEventListener("load", setup);