class AddIndexToPersonIdOnPeople < ActiveRecord::Migration[6.1]
  def change
    add_index :people, :person_id
  end
end
