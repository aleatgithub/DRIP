class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :seller_id, null: false
      t.integer :sneaker_id, default: '1'
      t.string :condition, default: 'New'
      t.float :size, null: false
      t.integer :price, null: false
      t.timestamps
    end
  end
end
