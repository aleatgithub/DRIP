class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in

  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in
    !!current_user
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end
 
  #we might use this method for attempting to see profile/cart
  def deny_access_if_not_logged_in
    unless logged_in
      render json: ['You must be logged in to do that'], status: :unauthorized
    end
  end


 
end
