import ProductCard from "./ProductCard.js"

export default async function ProductSlider(props) {
    //create slider
    const slider = document.createElement('div') 
    slider.id='container-products'
    slider.className = 'owl-carousel owl-carousel-products  owl-theme'
    
    //append products from data
    props.data.clothes.forEach(item => {
        slider.appendChild(new ProductCard(item))
    });

    return slider
}