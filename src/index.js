import articlesTpl from './index.hbs';
import { NewsApi } from './api-service';

const formEl = document.querySelector('.js-search-form')
const articlesContainerEl = document.querySelector('.js-articles-container')
const loadMoreBtn = document.querySelector('[data-action="load-more"]')

const newsApiService = new NewsApi()
newsApiService.fetchArticles()
formEl.addEventListener('submit', onSearchForm)
loadMoreBtn.addEventListener('click', onLoadMorePhoto)

function onSearchForm(e) {
    e.preventDefault()

    const form = e.currentTarget
    newsApiService.searchQuery = form.elements.query.value
    newsApiService.resetPage()
    newsApiService.fetchArticles(searchQuery)
    .then(articles=>createMurkup(articles))
}

function onLoadMorePhoto() {
    newsApiService.fetchArticles(searchQuery)
    .then(articles=>createMurkup(articles))
}

function createMurkup(articles) {
    const murkup = articlesTpl(articles)
    articlesContainerEl.innerHTML = murkup
}