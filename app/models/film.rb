class Film < ApplicationRecord
  include Caching
  
  def self.swapi_klass
    Tatooine::Film
  end

  def self.record_id_name
    :film_id
  end
end
