class VehiclesController < ApplicationController
  def index
    render json: Vehicle.all.to_json
  end

  def show
    render json: Vehicle.find_by(vehicle_id: params[:id]).to_json
  end
end