module Api
  module V1
    class CheckoutsController < ActionController::Base

      def new

      end

      def create
        Stripe.api_key = ENV["STRIPE_SECRET_KEY"]

        # Get the credit card details submitted by the form
        token = params[:stripeToken]

        tech = User.find(params[:order][:tech_id])
        if tech.status == 'online'

          # Create a Customer
          customer = Stripe::Customer.create(
              :source => token,
              :description => "Example customer"
          )

          @order = Order.new(params_order)
          @order.customer_id = customer.id
          @order.user_id = tech.id

          if @order.save
            EmailRepairRequestNotification.to_tech(tech, @order).deliver_now
            render json: {result: 'success'}
          else
            render json: {result: 'Something went wrong. Please refresh the page and try again'}
          end

        else
          render json: {result: 'Shop is no longer available. Please select another shop'}
        end

      end

      private

      def params_order
        params.require(:order).permit(:location,  :device, :model, :color ,:issue, :price, :customer_id, :user_id, :request_status, :info, :phone)
      end

    end

  end
end