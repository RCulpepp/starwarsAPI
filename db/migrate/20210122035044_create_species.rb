class CreateSpecies < ActiveRecord::Migration[6.1]
  def change
    create_table :species do |t|
      t.integer :species_id
      t.text :data
      t.timestamps
    end
  end
end
