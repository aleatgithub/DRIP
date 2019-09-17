class Sneaker < ApplicationRecord
 validates :model, :description, :sku, :release_date, :colorway, :brand, :silhouette, :technology, :designer, presence: true

 has_many :listings
 has_one_attached :photo
 
end 
