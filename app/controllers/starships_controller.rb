class StarshipsController < ApplicationController
  def index
    render json: Starship.all.to_json
  end

  def show
    render json: Starship.find_by(starship_id: params[:id]).to_json
  end
end