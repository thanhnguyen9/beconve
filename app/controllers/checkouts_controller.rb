class CheckoutsController < ActionController::Base

  def new
    render inline:Braintree::ClientToken.generate
  end
end
