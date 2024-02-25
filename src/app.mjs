import doFetch from "./utils/getProductsData.mjs" 
import buildNewGamesArticle from './utils/buildNewGamesArticle.mjs'
import buildBestSellingGames from "./utils/buildBestSellingGame.mjs"
import {putToStorage} from './utils/localStorage.mjs'

const data = await doFetch()

function buildAll() {
    for (let i = 0; i < data.data.length; i++) {
        buildNewGamesArticle(data.data[i])
        buildBestSellingGames(data.data[i])
    }
}

const searchBar = document.getElementById('search-movie')
const searchBtn = document.getElementById('search-movie-btn')

document.addEventListener('click', (e) => {
    putToStorage('gameID', e.target.id)
})

buildAll()