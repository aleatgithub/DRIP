json.extract! sneaker, 
  :id,
  :name, 
  :description, 
  :sku, 
  :release_date, 
  :colorway, 
  :brand, 
  :silhouette, 
  :technology, 
  :designer

 if sneaker.photo.attached? 
    json.photoUrl url_for(sneaker.photo)
  else
    json.photoUrl ""
  end

