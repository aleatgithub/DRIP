

@sneakers.each do |sneaker| 
  json.set! sneaker.id do 
  json.extract! sneaker, :id, :model
  end
end
