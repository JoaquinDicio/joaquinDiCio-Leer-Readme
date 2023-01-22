export default function CommonSlider(props){
    let slidesHTML = ''
    props.sliderItems.forEach((slide)=>{
        slidesHTML+=`<div class="item" style="background-image: url(${slide})" ></div>`
    })
    return (`
        <div class="owl-carousel owl-theme owl-carousel-${props.type}">
            ${slidesHTML}
        </div>
    `)    
}