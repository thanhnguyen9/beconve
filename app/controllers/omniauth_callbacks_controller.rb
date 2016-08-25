class OmniauthCallbacksController < Devise::RegistrationsController
  
  def stripe_connect
    @user = current_user
    if @user.update_attributes({
                                   stripe_provider: request.env["omniauth.auth"].provider,
                                   stripe_uid: request.env["omniauth.auth"].uid,
                                   stripe_access_code: request.env["omniauth.auth"].credentials.token,
                                   stripe_publishable_key: request.env["omniauth.auth"].info.stripe_publishable_key
                               })
      # anything else you need to do in response..
      sign_in_and_redirect @user, :event => :authentication
      set_flash_message(:notice, :success, :kind => "Stripe") if is_navigational_format?
    else
      session["devise.stripe_connect_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to root_path, alert: "#{params[:error_description]}"
  end
end