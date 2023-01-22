export default function ProductCard(props) {

  return (`
    <div class="product-card">
      <div class="product-card-image" style="background-image:url(${props.imageUrl});"></div>
      <p>${props.item.name}</p>
      <p>${props.item.price}</p>
    </div>
  `)
}