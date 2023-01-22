export default function ProductCard(props){
     // Create the card element
  const card = document.createElement("div");
  card.classList.add("product-card");

  const image = document.createElement('div')
  image.classList.add('product-card-image')
  image.style=`background-image:url(${props.imageUrl});`
  card.appendChild(image)
  // Add the product information
  const name = document.createElement("p");
  name.textContent = props.name;
  card.appendChild(name);

  const price = document.createElement("p");
  price.textContent = props.price
  card.appendChild(price);

  // Returns the card
  return card;
}


// export default function ProductCard (){

//     constructor(product, containerId) {
//         this.product = product;
//         this.container = document.getElementById(containerId);
//     }
//     create() {
//         this.container.innerHTML += `
//             <div class="product-card">
//                 <div style="background-image:url(${this.product.imageUrl});" class="product-img">
//                 </div>
//                 <p>${this.product.name}</p>
//                 <p>${this.product.price}</p>
//             </div>
//         `
//     }
// }
