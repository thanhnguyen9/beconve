module Api
  module V1
    class ShopsController < ApplicationController

      def index
        render json: {status: 'success', response: User.order('id ASC').near(params[:location])}
      end

      def show

        date_selected = DateTime.now
        if params['date'].present?
          arr_date = params['date'].split(',')
          date_selected = Date.new(arr_date[0].to_i, arr_date[1].to_i, arr_date[2].to_i)
        end

        business_hour = BusinessHour.where(user_id: params[:id], day: date_selected.strftime("%A"))[0]

        open_time = convert_to_date_time(business_hour.open_time)
        close_time = convert_to_date_time(business_hour.close_time)

        thirty_minutes_step = (1.to_f/24/2)
        total_slots = []
        available_slots = []

        open_time.step(close_time, thirty_minutes_step).each{|e| total_slots << e}
        total_slots.pop

        # total_slots.each do |i|
        #   available_slots << "#{i.hour}:#{i.min}"
        # end
        user = User.find(params[:id])
        render status: 200, json: {
            status: "success",
            shop: user.as_json(:include => :business_hours),
            slots: total_slots
        }.to_json

      end

      def update
        tech = User.find(params[:id])

        if tech.update(account_update_params)
          render json: {status: 'success'}
        else
          render json: {status: 'failed'}
        end
      end

      def tech_request
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

      private

      def account_update_params
        params.require(:user).permit(:name, :address, :warranty, :response_time, :rating, :reviews, :reviews_link, :device_count, :image, :status)
      end

      def convert_to_date_time(attr)
        now = DateTime.now
        DateTime.new(now.year, now.month, now.day, attr.hour, attr.min, 0, now.zone)
      end
    end
  end
end