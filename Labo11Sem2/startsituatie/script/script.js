// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.

const setup = () => {


    let likedMovies = [];

    showMovies();



}

const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
};

const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};

const like =(event) => {
    let like = event.target.parentElement;
    like.setAttribute('id', 'likecounter');
    let title = document.createTextNode(movies[like.getAttribute(data-id) - 1].title);



    likedMovies.push(title);

    console.log(title);



}

const dislike = (event) => {
    let dislike = event.target;
    dislike.setAttribute('id', 'dislikecounter');
}


const showMovies = () => {
    let movielist = document.getElementById('movielist');

    movies.forEach((movie , index) => {

        const movieDiv = createElement('div', "movie");
        const title = createElement('div', "title", movie.title);

        const description = createElement('p', "description", movie.description);
        const image = createElement('img', "image");

        image.setAttribute("src", movie.imageUrl);

        const likeButton = createIconButton("fas fa-thumbs-up", "unset likebutton",  like);
        const dislikeButton = createIconButton("fas fa-thumbs-down", "likebutton", dislike);
        likeButton.setAttribute("data-id", movie.id);


        const buttons = createElement("div", "buttons");

        buttons.appendChild(likeButton);
        buttons.appendChild(dislikeButton);

        movieDiv.appendChild(title);
        movieDiv.appendChild(description);
        movieDiv.appendChild(image);
        movieDiv.appendChild(buttons);
        movielist.appendChild(movieDiv);




    });
}
window.addEventListener("load", setup);