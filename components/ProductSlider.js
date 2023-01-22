import ProductCard from "./ProductCard.js"

export default async function ProductSlider(props) {
    let productCardsHTML = ''
    //append products from data
    props.data.clothes.forEach(item => {
        productCardsHTML+=ProductCard({item});
    });
    //create slider
    return (`
    <h4 class="w-100 text-center">Lo que se está llevando</h4>
    <div id="container-products" class="owl-carousel owl-carousel-products owl-theme">
      ${productCardsHTML}
    </div>
    `)
}