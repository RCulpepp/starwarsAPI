class AddIndexToVehicleIdOnVehicles < ActiveRecord::Migration[6.1]
  def change
    add_index :vehicles, :vehicle_id
  end
end
