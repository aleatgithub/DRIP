
export const fetchCart = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/cart_items'
  });
};

export const addToCart = (cart_item) => {
  return $.ajax({
    method: 'POST',
    url: '/api/cart_items',
    data: { cart_item }
  });
};

export const removeFromCart = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/cart_items/${id}`
  })
}
