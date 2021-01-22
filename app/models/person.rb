class Person < ApplicationRecord
  include Caching
  
  def self.swapi_klass
    Tatooine::Person
  end

  def self.record_id_name
    :person_id
  end
end
