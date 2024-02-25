import buildGame from "./utils/buildGame.mjs"
import {putToStorage, getFromStorage } from "./utils/localStorage.mjs"

buildGame()

const addToCartBtn = document.getElementById('add-to-cart')

addToCartBtn.addEventListener('click', () => {
    const id = getFromStorage('gameID')

    const newCart = [id]
    const oldCart = getFromStorage('cart')

    if (oldCart?.length) {
        for (let i = 0; i < oldCart.length; i++) {
            newCart.push(oldCart[i])
        }
    }

    putToStorage('cart', newCart)
})