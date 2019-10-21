class Api::SneakersController < ApplicationController

  def index
    @sneaker_count = Sneaker.count
    @sneakers = Sneaker.all
    render :index
  end

  def show
    @sneaker = Sneaker.find_by(id: params[:id])
    render :show
  end

   def search
    query = params[:query].downcase

    if query.present?
      search_res = Sneaker.where('LOWER(model) ~ :query OR LOWER(brand) ~ :query OR LOWER(designer) ~ :query', query: query)
      @sneaker_count = search_res.count
      @sneakers = search_res.order(:id).page(params[:page])
    else
      @sneaker_count = 0
      @sneakers = []
    end
    
    render :search
  end


end
