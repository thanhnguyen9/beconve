class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  respond_to :html, :json
  protect_from_forgery with: :exception

  def index
  end

  private

  def after_sign_in_path_for(resource)
    if params[:user].present? && params[:user][:role] === 'host'
      current_user.promote
    end

    if current_user.has_role? :host
      root_path
    else
      root_path
    end
  end

  def authenticate_user!
    redirect_to user_session_path unless user_signed_in?
  end

end