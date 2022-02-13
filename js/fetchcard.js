function getCards() {

    const GET_CARD_URL = "https://asi2-backend-market.herokuapp.com/cards";
    let context = {
        method: 'GET'
    };

    fetch(GET_CARD_URL, context)
        .then(response => response.json())
        .then(response => callbackCards(response))
        .catch(error => err_callback(error));
}

function callback(response) {
    document.getElementById("txtChuck").innerHTML = response.value;
}

function callbackCards(response) {

    let template = document.querySelector("#selectedCard2");

    for (const card of response) {
        let clone = document.importNode(template.content, true);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{family_src}}/g, card.family)
            .replace(/{{image_src}}/g, card.imgUrl)
            .replace(/{{date}}/g, card.name)
            .replace(/{{comment}}/g, card.name)
            .replace(/{{like}}/g, card.name)
            .replace(/{{button}}/g, card.name);
        clone.firstElementChild.innerHTML = newContent;

        let cardContainer = document.querySelector("#gridContainer2");
        cardContainer.appendChild(clone);
    }

}

function err_callback(error) {
    console.log(error);
}