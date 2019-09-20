json.cart_items do
  @cart_items.each do |cart_item|
    json.extract! cart_item, :id, :user_id, :listing_id
  end
end

json.listings do
  @cart_items.each do |cart_item|
    json.extract! cart_item.listing, :id, :size, :price
  end
end

json.sneakers do
  @cart_items.each do |cart_item|
    json.extract! cart_item.listing.sneaker, :id, :name

    if cart_item.listing.sneaker.photo.attached? 
      json.photoUrl url_for(cart_item.listing.sneaker.photo)
    else
      json.photoUrl ""
    end 
  end
end
