class Starship < ApplicationRecord
  include Caching
  
  def self.swapi_klass
    Tatooine::Starship
  end

  def self.record_id_name
    :starship_id
  end
end
