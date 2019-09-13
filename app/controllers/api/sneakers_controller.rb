class Api::SneakersController < ApplicationController

  def index
    @sneakers = Sneaker.all
    
  end

  def show
    @sneaker = Sneaker.find(params[id])
    render :show
  end

  def sneaker_params
    params.require(:sneaker).permit(:model, :brand, :technology)
  end
end
