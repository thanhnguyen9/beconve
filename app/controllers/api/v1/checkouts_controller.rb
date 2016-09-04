module Api
  module V1
    class CheckoutsController < ActionController::Base

      def new

      end

      def create
        Stripe.api_key = ENV["STRIPE_SECRET_KEY"]

        # Get the credit card details submitted by the form
        token = params[:order][:stripeToken]

        tech = User.find(params[:order][:tech_id])
        if tech.status == 'online'

          # Create a Customer
          # customer = Stripe::Customer.create(
          #     :source => token,
          #     :description => "Example customer"
          # )

          charge = Stripe::Charge.create(
              :amount => params[:order][:price].to_i * 100, # Amount in cents
              :currency => "usd",
              :source => token,
              :description => "BECONVE"
          )

          @order = Order.new(params_order)
          # @order.customer_id = customer.id
          @order.user_id = tech.id
          @order.charge_id = charge.id
          @order.customer_email = charge.source.name

          if @order.save
            EmailRepairRequestNotification.to_tech(tech, @order).deliver_now
            render json: {result: 'success'}
          else
            render json: {result: 'Something went wrong. Please refresh the page and try again'}
          end

        else
          render json: {result: 'Shop is no longer available. Please select another shop'}
        end

      rescue Stripe::InvalidRequestError => e
        render json: {result: e.message }

      rescue Stripe::CardError => e
        render json: {result: e.message}

      rescue Stripe::StripeError => e
        render json: {result: e.message}

      end

      private

      def params_order
        params.require(:order).permit(:location,  :device, :model, :color ,:issue, :price, :customer_id, :customer_phone, :customer_email, :charge_id, :user_id, :request_status, :info, :phone)
      end

    end

  end
end