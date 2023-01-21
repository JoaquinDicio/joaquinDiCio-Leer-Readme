async function main() {
    setMenu();
    await setProductSlider(); //this needs to be await, this way OwlPlugin can set its properties correctly
    setOwlPlugin();
}

//navigation setters
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

//body construction
async function setProductSlider() {
    const { clothes } = await getData('../db/fake-data.json')
    for (const product of clothes) {
        new ProductCard(product, 'container-products').create()
    }
}

//utilities
async function getData(url) {
    const res = await fetch(url);
    return await res.json();
}

//===== COMPONENTS ======//
class ProductCard {

    constructor(product, containerId) {
        this.product = product;
        this.container = document.getElementById(containerId);
    }
    create() {
        this.container.innerHTML += `
            <div class="product-card">
                <div style="background-image:url(${this.product.imageUrl});" class="product-img">
                </div>
                <p>${this.product.name}</p>
                <p>${this.product.price}</p>
            </div>
        `
    }
}

