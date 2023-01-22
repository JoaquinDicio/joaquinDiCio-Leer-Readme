export default function ProductCard(props) {

  return (`
    <div class="product-card">
      <div class="product-card-image" style="background-image:url(${props.imageUrl});"></div>
      <p>${props.item.name}</p>
      <p>${props.item.price}</p>
    </div>
  `)
}

// export default function ProductCard(props){
//      // Create the card element
//   const card = document.createElement("div");
//   card.classList.add("product-card");

//   const image = document.createElement('div')
//   image.classList.add('product-card-image')
//   image.style=`background-image:url(${props.imageUrl});`
//   card.appendChild(image)
//   // Add the product information
//   const name = document.createElement("p");
//   name.textContent = props.name;
//   card.appendChild(name);

//   const price = document.createElement("p");
//   price.textContent = props.price
//   card.appendChild(price);

//   // Returns the card
//   return card;
// }