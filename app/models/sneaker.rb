class Sneaker < ApplicationRecord


 has_many :listings
 has_one_attached :photo
 
end 
