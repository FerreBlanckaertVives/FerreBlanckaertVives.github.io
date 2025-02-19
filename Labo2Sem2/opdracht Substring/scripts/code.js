const setup = () => {
    const substring = () => {

        let start = parseInt(document.getElementById("start").value,10);
        let string = document.getElementById("input").value;
        let end = parseInt(document.getElementById("end").value,10);
        document.getElementById("output").textContent = string.substring(start, end);
    };

    document.getElementById("btnSubstring").addEventListener("click", substring );



};

window.addEventListener("load", setup);
