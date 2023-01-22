export default function ProductCard(props) {

  return (`
    <div class="product-card">
      <div class="product-card-image" style="background-image:url(${props.item.imageUrl});">
      </div>
      <p class="text-center">${props.item.name}</p>
      <div class="d-flex w-100 align-items-center justify-content-center">
        <p class="product-card-price">${props.item.price}</p>
        ${props.item.inOffer?`<s class="product-card-price">${(props.item.price * 1.2).toFixed(2)}</s>`:''}
      </div>
    </div>
  `)
}