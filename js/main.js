import ProductSlider from "../components/ProductSlider.js";
import getData from "../utils/getData.js";
import SearchModal from "../components/SearchModal.js";
import setOwlPlugin from "./owl-plugin/config.js";

window.onload = async function () {
    await main();
};

async function main() {
    setMenu();
    setSearchBar();
    await renderProductSlider(); //this needs to be async, this way OwlPlugin can set its properties correctly
    setOwlPlugin();
}

//NAVIGATION SETTERS

function setMenu() {
    const $menuBtn = document.getElementById('menuBtn')
    const $closeBtn = document.getElementById('closeBtn')
    $menuBtn.addEventListener('click', menuHandleClick)
    $closeBtn.addEventListener('click', menuHandleClick)
}
function menuHandleClick() {
    const $menu = document.getElementById('menu')
    $menu.classList.toggle('d-flex-md')
}

//COMPONENTS

async function renderProductSlider() {
    const slider = await ProductSlider({ data: await getData('../db/fake-data.json') });
    const main = document.querySelector('main')
    main.innerHTML += (slider)
}

async function renderSearchModal(searchValue) {
    const container = document.querySelector('.active-search')
    const close = document.getElementById('close-mark')
    container.innerHTML = await SearchModal({ searchValue })
    container.classList.remove('d-none')
    close.classList.remove('d-none')
}

function dismmountSearchModal(){
    const container = document.querySelector('.active-search')
    const close = document.getElementById('close-mark')
    container.classList.add('d-none')
    close.classList.add('d-none')
}

async function updateSearchModal(searchValue) {
    const container = document.querySelector('.active-search')
    container.innerHTML = await SearchModal({ searchValue })
}

function setSearchBar() {
    const input = document.getElementById('search-input')
    const close = document.getElementById('close-mark')
    close.addEventListener('click',()=> dismmountSearchModal())
    input.addEventListener('click', (e) => renderSearchModal(e.target.value))
    input.addEventListener('input', (e) => updateSearchModal(e.target.value))
}


