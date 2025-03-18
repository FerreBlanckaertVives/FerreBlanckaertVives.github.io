const setup = () => {
    let btn = document.getElementById("btnTrigram");


    let word = document.getElementById("woord");
    const tri = splits(word);

    btn.addEventListener("click", splits);


}

const splits = (word) =>{
    let input = word;
    let text = input.value;

    for(let i = 0; i < text.length - 2; i++){
     console.log(text.slice(i, i + 3) ) ;
    }

}
window.addEventListener("load", setup);