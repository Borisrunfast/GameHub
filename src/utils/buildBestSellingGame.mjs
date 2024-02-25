
export default function buildBestSellingGames(data) {
    const ul = document.getElementById('display-best-selling')

    const li = document.createElement('li')
    
    li.classList = 'best-selling-list-item'
    

    const image = document.createElement('img')
    image.src = data.image.url
    image.alt = data.image.alt
    image.id = data.id
    image.classList = 'best-selling-list-item-image'

    const anchorTag = document.createElement('a')
    anchorTag.href = './game/index.html'
    anchorTag.id = data.id
    anchorTag.append(image)

    li.append(anchorTag)
    ul.append(li)
}