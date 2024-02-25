export default function openSearch(data, searchList) {

    const foundByTitle = data.filter((game) => game.title.toLowerCase() == searchList.toLowerCase())

    searchList = searchList.toLowerCase()
    searchList = searchList.split(' ')

    const foundByGenre = []

    foundByGenre.push(data.filter(item => {
        /*search for tags*/
        if (searchList.some(search => {
            /*only works if the item.genre is not an array, 
            but still acts as if it is searching an array for multiple tags.
            I mistook the data.tags (array) for data.genre (string)*/
            const genreArr = item.genre.toLowerCase().split(' ')
            return genreArr.some(tag => tag.includes(search))
        })) {
            return true
        }
        return false
    }))


    const foundData = foundByTitle.concat(foundByGenre[0])

    return foundData
}