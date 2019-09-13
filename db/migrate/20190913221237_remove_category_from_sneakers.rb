class RemoveCategoryFromSneakers < ActiveRecord::Migration[5.2]
  def change
    remove_column :sneakers, :category
  end
end
