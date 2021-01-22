class SpeciesController < ApplicationController
  def index
    render json: Species.all.to_json
  end

  def show
    render json: Species.find_by(species_id: params[:id]).to_json
  end
end