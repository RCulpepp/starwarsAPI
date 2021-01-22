class AddIndexToFilmIdOnFilms < ActiveRecord::Migration[6.1]
  def change
    add_index :films, :film_id
  end
end
