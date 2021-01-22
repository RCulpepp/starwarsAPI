module Caching
  extend ActiveSupport::Concern

  class_methods do
    def find_by(attrs)
      record = super(attrs)
      return record if record.present? || !attrs.has_key?(record_id_name)

      begin
        cache_record(attrs[record_id_name])
      rescue *Tatooine::ERROR_CLASSES => e
        print e
        #output to production error handling
      end
    end

    def cache_record(id)
      create(record_id_name => id, data: swapi_klass.get(id).to_json)
    end
  end

  def data=(json)
    self[:data] = JSON.pretty_generate(JSON.parse(json))
  end

  def to_json
    data
  end
end