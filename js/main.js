import setOwlPlugin from "./owl-plugin/config.js";
import renderApp from "./renderApp.js";
import { renderSearchModal } from "./renderApp.js";
import { dismmountSearchModal, updateSearchModal} from "../components/SearchModal.js";

window.onload = async function () {
    await main();
};

async function main() {
    setMenu();
    setSearchBar();
    await renderApp()
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

function setSearchBar() {
    const input = document.getElementById('search-input')
    const close = document.getElementById('close-mark')
    close.addEventListener('click',()=> dismmountSearchModal())
    input.addEventListener('click', (e) => renderSearchModal(e.target.value))
    input.addEventListener('input', (e) => updateSearchModal(e.target.value))
}



