class PeopleController < ApplicationController
  def index
    render json: Person.all.to_json
  end

  def show
    render json: Person.find_by(person_id: params[:id]).to_json
  end
end