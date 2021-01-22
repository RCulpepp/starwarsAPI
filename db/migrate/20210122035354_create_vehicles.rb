class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.integer :vehicle_id
      t.text :data
      t.timestamps
    end
  end
end
