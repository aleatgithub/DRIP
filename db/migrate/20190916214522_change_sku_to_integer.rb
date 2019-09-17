class ChangeSkuToInteger < ActiveRecord::Migration[5.2]
  def change
    remove_column :sneakers, :sku
  end
end
