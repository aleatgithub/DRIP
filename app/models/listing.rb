class Listing < ApplicationRecord

  belongs_to :sneaker,
  foreign_key: :sneaker_id, 
  class_name: 'Sneaker'

end
