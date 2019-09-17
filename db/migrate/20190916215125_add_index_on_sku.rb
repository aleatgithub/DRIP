class AddIndexOnSku < ActiveRecord::Migration[5.2]
  def change
    add_index :sneakers, :sku, unique: true
  end
end
