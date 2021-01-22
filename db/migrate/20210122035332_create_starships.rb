class CreateStarships < ActiveRecord::Migration[6.1]
  def change
    create_table :starships do |t|
      t.integer :starship_id
      t.text :data
      t.timestamps
    end
  end
end
