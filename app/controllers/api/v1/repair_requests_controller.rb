module Api
  module V1
    class RepairRequestsController < ApplicationController

      def requests
        order = [{
            location: '6632 Deseo, Irving, TX 75039',
            device: 'Iphone',
            model: 'Iphone 6',
            color: 'White',
            issue: 'Broken Screen',
            price: '110',
            customer_id: 1,
            tech_id: params[:tech_id],
            request_status: 'open'
        }]
        render json: order
      end

      def approve_request
        # Update tech status
        # Update order status
        render json: {response: 'success'}
      end

      def decline_request
        # Update tech status
        # Update order status
        # Send email to BECONVE
        render json: {response: 'success'}
      end

      def complete_request
        # Update tech status
        # Update order status


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

      def update
        render json: {result: 'success'}
      end

    end
  end
end