
export default function buildCart(data) {
    const checkoutBody = document.getElementById('checkout-body')

    const gameSectionBody = document.createElement('section')
    const gameImage = document.createElement('img')
    const leftDiv = document.createElement('div')
    const gameTitle = document.createElement('h2')
    const gameDescription = document.createElement('p')
    const gameTags = document.createElement('p')
    const rightDiv = document.createElement('div')
    const gamePrice = document.createElement('p')
    const removeButton = document.createElement('button')

    gameSectionBody.classList = 'cart-item-body decoration-div-2'
    leftDiv.classList = 'cart-item-left'
    rightDiv.classList = 'cart-item-right'
    removeButton.classList = 'remove-btn decoration-div-2'

    gameImage.src = data.image.url
    gameImage.alt = data.image.alt
    gameTitle.textContent = data.title 
    gameDescription.textContent = data.description 
    gameTags.textContent = `PG-${data.ageRating}, ${data.released}, ${data.genre}`
    gamePrice.textContent = `$${data.price}`
    removeButton.textContent = 'remove'
    removeButton.id = data.id

    leftDiv.append(gameTitle, gameDescription, gameTags)
    rightDiv.append(gamePrice, removeButton)
    gameSectionBody.append(gameImage, leftDiv, rightDiv)
    checkoutBody.append(gameSectionBody)
}