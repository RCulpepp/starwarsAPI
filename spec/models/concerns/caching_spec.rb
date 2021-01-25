require 'rails_helper'

shared_examples_for "caching" do
  let(:model) { described_class } 
  let(:id_column_names){
    {
      people: :person_id,
      planets: :planet_id
    }
  }
  let(:swapi_class){ "Tatooine::#{described_class}".constantize }

  describe ".find_by" do
    context "database call returns nil" do
      it "calls the Star Wars API" do
        expect(swapi_class).to receive(:get)
        model.find_by(id_column_names[described_class.name.downcase.pluralize.to_sym] => 1)
      end

      it "saves the response in the database" do
        allow(swapi_class).to receive(:get).and_return({ name: "Swan Yolo", person_id: 1 })
        expect(Person.find_by({ person_id: 1 }).persisted?).to be_truthy
      end
    end
  end

end