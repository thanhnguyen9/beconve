class CheckoutsController < ActionController::Base

  def new
    binding.pry
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

    # Charge the Customer instead of the card
    Stripe::Charge.create(
        :amount => 1000, # in cents
        :currency => "usd",
        :customer => customer.id
    )

    render json: {result: 'success'}
  rescue Stripe::CardError => e
    render json: { result: 'failed', message: "#{e.message}"}

  rescue Stripe::StripeError => e
    render :json => { result: 'failed', message: "#{e.message}"}

  end

  private
  def transaction_params
    nonce = params[:payment_method_nonce]
    {
        amount: params[:price],
        :payment_method_nonce => nonce,
        customer: {
            first_name: 'Thanh',
            last_name: 'Nguyen',
            email: 'people8604@yahoo.com',
            id: 1,
            phone: '2542146688'
        },
        :options => {
            :submit_for_settlement => true
        }
    }
  end
end
