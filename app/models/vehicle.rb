class Vehicle < ApplicationRecord
  include Caching
  
  def self.swapi_klass
    Tatooine::Vehicle
  end

  def self.record_id_name
    :vehicle_id
  end
end
