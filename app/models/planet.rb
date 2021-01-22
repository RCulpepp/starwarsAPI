class Planet < ApplicationRecord
  include Caching
  
  def self.swapi_klass
    Tatooine::Planet
  end

  def self.record_id_name
    :planet_id
  end
end
