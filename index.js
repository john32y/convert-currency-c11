
const form = document.querySelector('form') //grab the form
form.addEventListener("submit", convertUSDtoWon) // onsubmit

function convertUSDtoWon(event) { // conversion
    event.preventDefault() // stop form from refreshing page
    const usd = Number(event.target.usd.value) // get form value
    const won = usd / 0.00078
    // now display on page:
    document.querySelector('h2').innerText = "$" + usd + " USD is equal to " + won.toFixed(2) + " Korean Won "
}
