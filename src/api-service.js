const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = "39207227-e0b610c42232251ba1ba1b4e0"

export class NewsApi {
    constructor () {
        this.searchQuery = '',
        this.page = 1
    }
    fetchArticles(searchQuery) {
        return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&per_page=20&page=${this.page}`)
        .then(response => response.json())
        .then(hits => {
            this.increasePage()
            return hits.hits
        })
    }
    increasePage() {
        this.page += 1
    }
    resetPage() {
        this.page = 1
    }
}