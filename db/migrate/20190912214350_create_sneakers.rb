class CreateSneakers < ActiveRecord::Migration[5.2]
  def change
    create_table :sneakers do |t|
      t.string :model, null: false
      t.string :main_color, null: false
      t.string :colorway
      t.string :silhouette
      t.string :technology
      t.string :upper
      t.string :brand, null: false
      t.string :designer
      t.string :category, null: false
      t.text :description, null: false
      t.timestamps
    end
    add_index :sneakers, :model, unique: true
  end
end
