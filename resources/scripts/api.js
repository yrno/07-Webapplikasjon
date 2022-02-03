async function getCatFact() {
    let catFact;
    const data = await fetch("https://catfact.ninja/fact");
    const json = await data.json();
    catFact = json.fact;
    console.log(catFact)
    if (catFact) {
        document.getElementById("fact").innerHTML = catFact;
    }
}
getCatFact();
async function drawCard() {
    const data = await fetch("https://deckofcardsapi.com/api/deck/d2tygv6s4gq3/draw/?count=1");
    const json = await data.json();
    drawnCard = json.cards[0].code;
    console.log(drawnCard+" drawn")
    drawnCardImage = json.cards[0].image;
    cardsRemaining = json.remaining;
    if (drawnCard) {
        document.getElementById("card_much").innerHTML = "<img src=\""+drawnCardImage+"\"> <p>"+cardsRemaining+" cards left in the deck</p>";
    }
}
async function shuffleDeck() {
    const x = await fetch("https://deckofcardsapi.com/api/deck/d2tygv6s4gq3/shuffle/")
    drawCard();
}
shuffleDeck();