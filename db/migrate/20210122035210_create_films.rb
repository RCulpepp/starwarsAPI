class CreateFilms < ActiveRecord::Migration[6.1]
  def change
    create_table :films do |t|
      t.integer :film_id
      t.text :data
      t.timestamps
    end
  end
end
