


json.extract! @sneaker, :id, :model, :colorway, :silhouette, :technology, :brand, :designer, :description



json.sneaker do
  json.partial! '/api/sneakers/sneaker', sneaker: @sneaker
  json.listingIds @sneaker.listings.pluck(:id)
end

@sneaker.listings.each do |listing|
  json.listings do 
    json.partial! 'api/listings/listing', listing: listing
  end
end



