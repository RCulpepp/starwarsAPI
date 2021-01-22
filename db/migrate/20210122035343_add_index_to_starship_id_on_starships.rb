class AddIndexToStarshipIdOnStarships < ActiveRecord::Migration[6.1]
  def change
    add_index :starships, :starship_id
  end
end
