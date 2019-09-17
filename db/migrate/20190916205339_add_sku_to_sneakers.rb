class AddSkuToSneakers < ActiveRecord::Migration[5.2]
  def change
    add_column :sneakers, :sku, :string, null: false, unique: true
  end
end
