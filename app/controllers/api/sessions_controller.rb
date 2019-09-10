class Api::SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login!(@user)
      render json: "Yay, you've created a session!"
    else
      # render json: @user.errors.full_messages, status: 422
      render json: "Invalid credentials", status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: "Can't log out if you're not logged in, boo."
    end
  end

end