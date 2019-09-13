class RemoveColumnsFromSneakers < ActiveRecord::Migration[5.2]
  def change
    remove_column :sneakers, :main_color
    remove_column :sneakers, :upper
  end
end
