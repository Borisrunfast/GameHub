
export default function buildNewGamesArticle(data) {
    const mainBody = document.getElementById('new-games')
    /*Article data*/
    const image = document.createElement('img')
    const title = document.createElement('h2')
    const description = document.createElement('p')

    const genre = document.createElement('p')
    const tags = document.createElement('p')
    const date = document.createElement('p')

    const price = document.createElement('p')
    const ageRating = document.createElement('p')

    const button = document.createElement('button')


    image.src = data.image.url
    image.alt = data.image.alt
    image.classList = 'new-game-img'
    title.textContent = data.title
    description.textContent = data.description

    genre.textContent = data.genre
    tags.textContent = data.tags
    date.textContent = data.released

    price.textContent = data.price
    ageRating.textContent = `PG ${data.ageRating}` 

    button.id = data.id
    button.textContent = 'Read More'

    button.classList = 'decoration-div-2'

    /*Article separating divs*/
    const topDiv = document.createElement('div')
    const overlapTopDiv = document.createElement('div')

    const botDiv = document.createElement('div')
    const titleNDescription = document.createElement('div')
    const tagsNButton = document.createElement('div')
    const anchorTag = document.createElement('a')
    anchorTag.href = './game/index.html'

    topDiv.classList = 'image-rating-overlap'
    overlapTopDiv.classList = 'new-game-rating'

    anchorTag.append(button)
    overlapTopDiv.append(price, ageRating, date)
    topDiv.append(overlapTopDiv, image)

    titleNDescription.append(title, description)
    tagsNButton.append(genre, tags, anchorTag)

    botDiv.append(titleNDescription, tagsNButton)
    /*Article body*/
    const articleBody = document.createElement('article')
    articleBody.classList = 'display-game decoration-div-2'
    articleBody.append(topDiv, botDiv)
    mainBody.append(articleBody)
}