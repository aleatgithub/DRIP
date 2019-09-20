class CreateCartItemsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :listing_id, null: false
      t.integer :user_id, null: false
    end
    add_index :cart_items, :user_id, unique: true
  end
end
