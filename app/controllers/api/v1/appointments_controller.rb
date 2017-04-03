module Api
  module V1
    class AppointmentsController < ApplicationController

      def index

      end

      def create
        Stripe.api_key = ENV["STRIPE_SECRET_KEY"]
        # Get the credit card details submitted by the form
        token = params[:appointment][:stripeToken]

        # Create a customer
        stripe_customer = Stripe::Customer.create(
            card: token,
            description: '',
            email: current_user.email
        )

        # charge = Stripe::Charge.create(
        #     :amount => params[:appointment][:price].to_i * 100, # Amount in cents
        #     :currency => "usd",
        #     :source => token,
        #     :description => "BECONVE"
        # )

        @appointment = Appointment.new(params_appointment)
        @appointment.customer_id = current_user.id
        @appointment.stripe_customer_id = stripe_customer.id

        arr_date = params['appointment']['dateSelected'].split('-')
        arr_time = params['appointment']['timeSlotSelected'].split(':')
        start_time = DateTime.new(arr_date[0].to_i, arr_date[1].to_i, arr_date[2].split('T')[0].to_i, arr_time[0].to_i, arr_time[1].to_i)
        @appointment.start_time = start_time

        if @appointment.save
          EmailBookNotification.to_shop(@appointment).deliver_now
          EmailBookNotification.to_customer(@appointment).deliver_now
          render status: 200, json: {
              status: "success"
          }.to_json
        else
          render status: 500, json: {
              status: "failed",
              result: 'Something went wrong. Please refresh the page and try again'
          }.to_json
        end

      rescue Stripe::InvalidRequestError => e
        render status: 500, json: {
            status: "failed",
            result: e.message
        }.to_json

      rescue Stripe::CardError => e
        render status: 500, json: {
            status: "failed",
            result: e.message
        }.to_json

      rescue Stripe::StripeError => e
        render status: 500, json: {
            status: "failed",
            result: e.message
        }.to_json

      end

      private

      def params_appointment
        params.require(:appointment).permit(:user_id, :customer_id, :stripe_customer_id, :info, :amount_charged, :start_time, :end_time, :price)
      end

    end
  end
end