class Listing < ApplicationRecord

  belongs_to :sneaker,
  foreign_key: :sneaker_id, 
  class_name: 'Sneaker'

    has_many :cart_items,
    foreign_key: :listing_id,
    class_name: 'CartItem'

end
