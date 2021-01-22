class AddIndexToSpeciesIdOnSpecies < ActiveRecord::Migration[6.1]
  def change
    add_index :species, :species_id
  end
end
