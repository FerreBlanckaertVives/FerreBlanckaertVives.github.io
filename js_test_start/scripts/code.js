const setup = () => {

    const list = document.getElementById('lijst');
    list.add(new Option("--Kies--"))
    list.add(new Option('Zonder een ei'));
    list.add(new Option('Met een ei'));

    const metofzondereiString = document.getElementById('metofzonderei');


    const aantalletterstring = document.getElementById('aantalletters');
    list.addEventListener('change', changeimage)

    aantalletterstring.addEventListener('change', countString);


}

const changeimage = () => {
    const list = document.getElementById('lijst');
    const img = document.getElementById('img');
    const output = document.getElementById('metofzonderei');

    if(list.value === 'Zonder een ei')
    {
        img.className = 'img';

        output.innerHTML = "zonder een ei";

    }
    else if(list.value === 'Met een ei')
    {
        img.className = 'img';
        img.className = 'with-egg';
        output.innerHTML = "met een ei";

    }
    else{
        img.className = 'img';
        img.className = 'hidden';
    }

}

const countString = () => {
    const string = document.getElementById('aantalletters');
    const stringtocompare = document.getElementById('aantalletters');
    const list = document.getElementById('lijst');

    let index = 0;

    for(i = 0; i<list.value.length; i++)
    {
        if(string === list.value.charAt(i))
        {
            index++;
        }
    }

    const stringoutput = document.getElementById('aantallettersp');
    stringoutput.innerHTML = "letter " + string.value + " komt " + index + " keer voor";

}
window.addEventListener("load", setup);