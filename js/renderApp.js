import getData from "../utils/getData.js";
import SearchModal from "../components/SearchModal.js";
import ProductSlider from "../components/ProductSlider.js";
import CommonSlider from "../components/CommonSlider.js";
import CatgSelector from "../components/CatgSelector.js";

export default async function renderApp(){
    renderBannerSliders();
    await renderProductSlider(); //this needs to be async, this way OwlPlugin can set its properties correctly
    await renderCategories(); 
}

function renderBannerSliders(){
    const sliderItems1 = [
        'https://www.stoked.cl/media/weltpixel/owlcarouselslider/images/s/t/stoked_trajes_web.jpg',
        'https://www.stoked.cl/media/weltpixel/owlcarouselslider/images/s/t/stoked_summer_sale_2023_web.jpg',
        'https://www.stoked.cl/media/weltpixel/owlcarouselslider/images/s/t/stoked_trajes_de_ban_o-01.jpg',
    ] //images url
    const sliderItems2= [
        'https://www.stoked.cl/media/wysiwyg/STOKED_SUMMER_SALE_2023-01_4.png',
        'https://www.stoked.cl/media/wysiwyg/STOKED_SUMMER_SALE_2023-03_3.png',
        'https://www.stoked.cl/media/wysiwyg/STOKED_SUMMER_SALE_2023-02_4.png',        
    ] //images url
    const container = document.querySelector('main')
    container.innerHTML+= CommonSlider({sliderItems:sliderItems1,type:1})
    container.innerHTML+= CommonSlider({sliderItems:sliderItems2,type:2})

}

async function renderCategories(){
    const {clothes} = await getData('../db/fake-data.json')
    const main = document.querySelector('main')
    main.innerHTML += CatgSelector({clothes})
}

async function renderProductSlider() {
    const slider = await ProductSlider({ data: await getData('../db/fake-data.json') });
    const main = document.querySelector('main')
    main.innerHTML += (slider)
}

export async function renderSearchModal(searchValue) {
    const container = document.querySelector('.active-search')
    const close = document.getElementById('close-mark')
    container.innerHTML = await SearchModal({ searchValue })
    container.classList.remove('d-none')
    close.classList.remove('d-none')
}