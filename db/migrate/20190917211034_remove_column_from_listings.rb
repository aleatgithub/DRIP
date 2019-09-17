class RemoveColumnFromListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :seller_id, :integer
  end
end
