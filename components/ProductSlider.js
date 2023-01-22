import ProductCard from "./ProductCard.js"

export default async function ProductSlider(props) {
    let productCards = ''
    //append products from data
    props.data.clothes.forEach(item => {
        productCards+=ProductCard({item});
    });
    //create slider
    return (`
    <div id="container-products" class="owl-carousel owl-carousel-products owl-theme">
      ${productCards}
    </div>
    `)
}