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
          render json: {response: response}
        end
      end

      def show
        business_hours = BusinessHour.where(user_id: params[:id])
        format_business_hours = []

        business_hours.each do |i|
          hash = {}
          hash['day'] = i.day.capitalize

          if i.open == true
            hash['open_time'] = i.open_time.strftime("%l:%M %p").delete(' ')
            hash['close_time'] = i.close_time.strftime("%l:%M %p").delete(' ')
          else
            hash['open_time'] = 'Closed'
            hash['close_time'] = 'Closed'
          end
          format_business_hours << hash
        end

        render status: 200, json: {
            status: "success",
            businessHours: format_business_hours
        }.to_json
      end

      def update
        binding.pry
      end

      private

      def params_price
        params.require(:price).permit(:device_type, :model, :issue, :price, :user_id)
      end

    end
  end
end