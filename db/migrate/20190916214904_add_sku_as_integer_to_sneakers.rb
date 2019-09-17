class AddSkuAsIntegerToSneakers < ActiveRecord::Migration[5.2]
  def change
    add_column :sneakers, :sku, :integer, null: false
  end
end
