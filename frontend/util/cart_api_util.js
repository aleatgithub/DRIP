
export const fetchCart = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/cart_items'
  });
};