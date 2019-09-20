class Api::CartItemsController < ApplicationController

   def index
    @cart_items = current_user.cart_items
    render :index
  end

  def create
  end

  def destroy
  end

  
end
