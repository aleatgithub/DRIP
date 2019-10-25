class RemoveIndexOnUserId < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, :name => "index_cart_items_on_user_id"
  end
end
