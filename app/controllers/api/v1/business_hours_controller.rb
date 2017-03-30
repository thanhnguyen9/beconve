module Api
  module V1
    class BusinessHoursController < ApplicationController

      def index
      end

      def create
        price = Price.new(params_price)
        if price.save
          response = {
              price: price,
              status: 'success'
          }
          render json: {response: response}
        else
          response = {
              status: 'failed'
          }
          rend
          render json: {response: response}
        end
      end

      def show
        price = Price.find(params[:id])
        render json: {response: price}
      end

      def update
        price = Price.find(params[:id])
        if price.update(params_price)
          render json: {response: 'success'}
        else
          render json: {response: 'failed'}
        end
      end

      private

      def params_price
        params.require(:price).permit(:device_type, :model, :issue, :price, :user_id)
      end

    end
  end
end