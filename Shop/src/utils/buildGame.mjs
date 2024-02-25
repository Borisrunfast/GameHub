import doFetch from "./getProductsData.mjs";
import { getFromStorage } from "./localStorage.mjs"

const data = await doFetch()

export default function buildGame() {

    const id = getFromStorage('gameID')

    const gameData = data.data.find(game => game.id === id)
    const sectionBody = document.getElementById('section-body')


    const gameDisplayDiv = document.createElement('div')
    const leftDiv = document.createElement('div')
    const rightDiv = document.createElement('div')
    const image = document.createElement('img')
    const title = document.createElement('h2')
    const description = document.createElement('p')
    const tags = document.createElement('p')
    const button = document.createElement('button')

    gameDisplayDiv.classList = 'game-display decoration-div-2'
    leftDiv.classList = 'image-div'
    rightDiv.classList = 'content-div'

    image.src = gameData.image.url
    image.alt = gameData.image.alt
    title.textContent = gameData.title
    description.textContent = gameData.description
    tags.textContent = `PG ${gameData.ageRating}, ${gameData.released}, ${gameData.genre}`
    button.textContent = 'Add To Cart'
    button.id = 'add-to-cart'
    button.classList = 'decoration-div-2'

    leftDiv.append(image)
    rightDiv.append(title, description, tags, button)
    gameDisplayDiv.append(leftDiv, rightDiv)

    sectionBody.append(gameDisplayDiv)
}