class PlanetsController < ApplicationController
  def index
    render json: Planet.all.to_json
  end

  def show
    render json: Planet.find_by(planet_id: params[:id]).to_json
  end
end