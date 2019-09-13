class AddReleaseDateToSneakers < ActiveRecord::Migration[5.2]
  def change
    add_column :sneakers, :release_date, :string
  end
end
