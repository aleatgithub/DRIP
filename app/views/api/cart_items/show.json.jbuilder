json.set! @cart_item.id do
  json.extract! @cart_item, :id, :user_id, :listing_id
  json.sneakerId @cart_item.listing.sneaker.id
  json.sneakerModel @cart_item.listing.sneaker.model
  json.sku @cart_item.listing.sneaker.sku
  json.price @cart_item.listing.price
  json.size @cart_item.listing.size
  if @cart_item.listing.sneaker.photo.attached? 
    json.photoUrl url_for(@cart_item.listing.sneaker.photo)
  else
    json.photoUrl ""
  end 
end