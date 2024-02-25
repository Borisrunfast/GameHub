async function doFetch() {
    const loader = document.getElementById('loader')
    try {
        if (localStorage.getItem('data')) {
            return JSON.parse(localStorage.getItem('data'))
        }
        loader.classList = 'loader'
        const response = await fetch('https://v2.api.noroff.dev/gamehub')
        const data = await response.json()
        localStorage.setItem('data', JSON.stringify(data))
        return data
    } catch (err) {
        console.log(`Error fetching data: ${err}`)
    } finally {
        loader.classList = 'loader-hidden'
    }
}

export default doFetch