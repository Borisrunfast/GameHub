
export default function buildDisplayGames(data) {

    const displayGamesDiv = document.getElementById('display-games')

    const gameDiv = document.createElement('div')
    const price = document.createElement('p')
    const image = document.createElement('img')
    const title = document.createElement('h3')
    const anchorTag = document.createElement('a')
    anchorTag.href = '../game/index.html'

    price.textContent = `${data.price}$`
    title.textContent = data.title
    image.src = data.image.url
    image.alt = data.image.alt

    price.id = data.id
    title.id = data.id
    image.id = data.id
    anchorTag.classList = 'game-container'
    
    gameDiv.append(price, image, title)
    anchorTag.append(gameDiv)

    displayGamesDiv.append(anchorTag)
}