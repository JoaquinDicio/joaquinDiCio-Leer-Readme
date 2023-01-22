import getData from "../utils/getData.js"
import ProductCard from "./ProductCard.js";

export default async function SearchModal(props) {
    //highlight coincidences
    const turnBold = (name) => {
        const regex = new RegExp(props.searchValue, 'gi');
        const highlightedWord = props.searchValue.charAt(0).toUpperCase() + props.searchValue.substr(1);
        return name.replace(regex,`<b>${highlightedWord}</b>`);
    }
    //getting data
    const {clothes} = await getData('../db/fake-data.json')
    //finding coincidences
    const filteredClothes = clothes.filter((item) => item.name.toLowerCase().includes(props.searchValue.toLowerCase()));
    let clothesHTML =''
    filteredClothes.forEach((result)=>clothesHTML+=ProductCard({item:result}))
    //getting top four coincidences
    let mostSearch = ''
    filteredClothes.slice(0,4).forEach((result)=>mostSearch+=`<p class="popular-search pointer">${turnBold(result.name, props.searchValue)}</p>`)
    //returning component
    return (
        `
        <div class="d-flex flex-column search-results-info">
            <div class="search-results-column">
                <h5>Busquedas populares</h5>
                ${mostSearch}
            </div>
            <div class="search-results-column">
                <h5>Busquedas recientes</h5>
                <p class="popular-search pointer">Women's Little Black Dress</p>
                <p class="popular-search pointer">Men's Blue Jeans</p>
                <p class="popular-search pointer">Girl's Pink Sundress</p>
                <p class="popular-search pointer">Boy's Camo Hoodie</p>
            </div>
        </div>  
        <div class='search-results'>
            <h5>Productos</h5>
            <div class="search-results-products d-flex justify-content-center">
                ${clothesHTML}
            </div>
            <h5 class="show-all text-center pointer">Ver todos (${filteredClothes.length})</h5>
        </div>
        `
    )
    
}

export function dismmountSearchModal(){
    const container = document.querySelector('.active-search')
    const close = document.getElementById('close-mark')
    container.classList.add('d-none')
    close.classList.add('d-none')
}

export async function updateSearchModal(searchValue) {
    const container = document.querySelector('.active-search')
    container.innerHTML = await SearchModal({ searchValue })
}