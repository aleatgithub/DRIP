class CreateSneakers < ActiveRecord::Migration[5.2]
  def change
    create_table :sneakers do |t|

      t.timestamps
    end
  end
end
