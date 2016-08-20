class CheckoutsController < ActionController::Base

  def new

  end

  def create
    Stripe.api_key = ENV["STRIPE_SECRET_KEY"]

    # Get the credit card details submitted by the form
    token = params[:stripeToken]

    # Create a Customer
    charge_customer = Stripe::Customer.create(
        :source => token,
        :description => "Example customer"
    )

    tech = User.find(params[:tech_id])

    if tech.status == 'online'
      order = {
          location: params[:location],
          device: params[:device],
          model: params[:model],
          color: params[:color],
          issue: params[:issue],
          price: params[:price],
          customer_id: customer.id,
          tech_id: params[:tech_id],
          request_status: 'open'
      }

      EmailRepairRequestNotification.to_tech(tech, order)
    else
      render json: {res: 'failed'}
    end
    binding.pry


    # # Charge the Customer instead of the card
    # Stripe::Charge.create(
    #     :amount => params[:price].to_i * 100, # in cents
    #     :currency => "usd",
    #     :customer => customer.id,
    #     :destination => "#{tech.uid}"
    # )

    render json: {result: 'success'}
  rescue Stripe::CardError => e
    render json: { result: 'failed', message: "#{e.message}"}

  rescue Stripe::StripeError => e
    render :json => { result: 'failed', message: "#{e.message}"}

  end

end
