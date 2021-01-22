class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.integer :planet_id
      t.text :data
      t.timestamps
    end
  end
end
