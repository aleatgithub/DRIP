

@sneakers.each do |sneaker| 
  json.set! sneaker.id do 
  json.partial! 'sneaker', sneaker: sneaker
  json.listingIds []
  end
end

