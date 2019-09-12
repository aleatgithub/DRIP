class Api::SneakersController < ApplicationController

  def index
    @sneakers = Sneakers.all
    render :index
  end

  def show
    @sneaker = Sneakers.find(params[id])
  end

  def sneaker_params
    params.require(:sneaker).permit(:model, :brand, :main_color, :technology)
  end
end
