class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.integer :person_id
      t.text :data
      t.timestamps
    end
  end
end
