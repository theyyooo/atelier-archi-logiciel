function createCard(e) {
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "id": 10, "name": "aze-------------------------------->", "description": "description2-------------------------------->", "family": "family2-------------------------------->", "affinity": "affinity2-------------------------------->", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "energy": 100, "hp": 81.19427, "defence": 69.24205, "attack": 3.1732023, "price": 111, "userId": null, "storeId": null });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://asi2-backend-market.herokuapp.com/card", requestOptions)
        .then(response => response.text())
        .then(result => callbackCards(result))
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