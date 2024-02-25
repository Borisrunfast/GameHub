import doFetch from "./utils/getProductsData.mjs";
import buildDisplayGames from "./utils/buildDisplayGames.mjs";
import openSearch from "./utils/openSearch.mjs";
import { putToStorage } from "./utils/localStorage.mjs";

const data = await doFetch()

for(let i = 0; i < data.data.length; i++) {

    buildDisplayGames(data.data[i])
}
document.addEventListener('click', (e) => {
    putToStorage('gameID', e.target.id)
})

const searchBtn = document.getElementById('search-movie-btn')


searchBtn.addEventListener('click', () => {
    const div = document.getElementById('display-games')
    const search = document.getElementById('search-movie').value

    const newSearchOrder = openSearch(data.data, search)
    div.replaceChildren()
    for (let i = 0; i < newSearchOrder.length; i++) {
        buildDisplayGames(newSearchOrder[i])
    }
})

