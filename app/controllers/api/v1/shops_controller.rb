module Api
  module V1
    class ShopsController < ApplicationController

      def index
        render json: {status: 'success', response: User.near(params[:location], 50,
                                                             :order => "distance")}
      end

      def show
        user = User.find(params[:id])
        render json: {response: user}
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

    end
  end
end