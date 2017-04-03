module Api
  module V1
    class ShopsController < ApplicationController

      def index
        render json: {status: 'success', response: User.order('id ASC').near(params[:location])}
      end

      def show
        user = User.find(params[:id])
        utc_time_now = DateTime.now.in_time_zone("Central Time (US & Canada)")
        time_now = Time.new(
            (utc_time_now.strftime('%Y')).to_i,
            (utc_time_now.strftime('%m')).to_i,
            (utc_time_now.strftime('%d')).to_i,
            (utc_time_now.strftime('%H')).to_i,
            (utc_time_now.strftime('%m')).to_i)
        date_selected = time_now

        if params['date'].present?
          arr_date = params['date'].split(',')
          date_selected = Date.new(arr_date[0].to_i, arr_date[1].to_i, arr_date[2].to_i)
        end

        business_hour = BusinessHour.where(user_id: params[:id], day: date_selected.strftime("%A"), open: true)[0]
        total_slots = []

        if business_hour.nil?
          render status: 200, json: {
              status: "success",
              shop: user.as_json(:include => :business_hours),
              slots: total_slots
          }.to_json
        else
          open_time = convert_to_date_time(date_selected, business_hour.open_time)
          close_time = convert_to_date_time(date_selected, business_hour.close_time)

          thirty_minutes_step = (1.to_f/24/2)
          total_slots = []
          available_slots = []

          open_time.step(close_time, thirty_minutes_step) do |e|
            total_slots << e if e > time_now + 900
          end

          existed_appointments = Appointment.where('DATE(start_time) = ?', Date.today).map{|x| x.start_time}

          total_slots = total_slots.reject{|x| existed_appointments.include? x}
          total_slots.pop

          render status: 200, json: {
              status: "success",
              shop: user.as_json(:include => :business_hours),
              slots: total_slots
          }.to_json
        end

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

      def convert_to_date_time(date_selected, time)
        DateTime.new(date_selected.year, date_selected.month, date_selected.day, time.hour, time.min, 0)
      end
    end
  end
end