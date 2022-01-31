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