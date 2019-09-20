
json.listing do 
  json.partial! 'api/sneakers/:sneaker_id/listings/:id', listing: @listing
end


