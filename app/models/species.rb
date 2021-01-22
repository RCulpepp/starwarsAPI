class Species < ApplicationRecord
  include Caching
  
  def self.swapi_klass
    Tatooine::Species
  end

  def self.record_id_name
    :species_id
  end
end
