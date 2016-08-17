class CheckoutsController < ActionController::Base

  def new

  end

  def create
    Stripe.api_key = ENV["STRIPE_SECRET_KEY"]

    # Get the credit card details submitted by the form
    token = params[:stripeToken]

    # Create a Customer
    customer = Stripe::Customer.create(
        :source => token,
        :description => "Example customer"
    )

    # tech = Technician.find(params[:tech_id])
    tech = User.find(2)

    # Charge the Customer instead of the card
    Stripe::Charge.create(
        :amount => params[:price].to_i * 100, # in cents
        :currency => "usd",
        :customer => customer.id,
        :destination => "#{tech.uid}"
    )

    render json: {result: 'success'}
  rescue Stripe::CardError => e
    render json: { result: 'failed', message: "#{e.message}"}

  rescue Stripe::StripeError => e
    render :json => { result: 'failed', message: "#{e.message}"}

  end

end
