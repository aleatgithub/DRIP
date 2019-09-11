class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    # debugger
    if @user
      login!(@user)
      render "api/users/show"
    else
      # render json: @user.errors.full_messages, status: 422
      render json: "Invalid credentials", status: 422;
      puts "Go to your controller - login isn't working" 
    end
  end

  def destroy
    @user = current_user

    if @user
      logout!
      render json: {}
    else
      render json: "Can't log out if you're not logged in, boo."
    end
  end

end