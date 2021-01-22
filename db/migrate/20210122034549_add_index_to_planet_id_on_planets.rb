class AddIndexToPlanetIdOnPlanets < ActiveRecord::Migration[6.1]
  def change
    add_index :planets, :planet_id
  end
end
