import buildCart from "./utils/buildCart.mjs";
import buildCheckoutSuccess from "./utils/buildCheckoutSuccess.mjs";
import doFetch from "./utils/getProductsData.mjs";
import { putToStorage, getFromStorage } from "./utils/localStorage.mjs";

const data = await doFetch()
const cartGamesBody = document.getElementById('checkout-body')
const totalPriceP = document.getElementById('total-price')
let cartIds


function buildGames() {
    cartIds = getFromStorage('cart')
    let totalPrice = 0
    const filteredData = data.data.filter(game => cartIds.includes(game.id))
    

    for (let i = 0; i < filteredData.length; i++) {
        buildCart(filteredData[i])
        totalPrice += filteredData[i].price
    }

    totalPriceP.textContent = `Total Price: $${totalPrice}`
}


document.addEventListener('click', (e) => {
    let newCart = []
    if (e.target.id) {
        newCart = cartIds.filter(cartId => !(cartId == e.target.id))
        putToStorage('cart', newCart)
        cartGamesBody.replaceChildren()
        buildGames()
    } else if(e.target.classList[0] == 'pay-btn') {
        putToStorage('cart', [])

        buildCheckoutSuccess()
    }
    
})

buildGames()