class FilmsController < ApplicationController
  def index
    render json: Film.all.to_json
  end

  def show
    render json: Film.find_by(film_id: params[:id]).to_json
  end
end