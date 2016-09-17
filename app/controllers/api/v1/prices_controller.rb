module Api
  module V1
    class PricesController < ApplicationController

      def index
        prices = Price.where(device_type: params[:type], issue: params[:issue], user_id: current_user.id)

        if params[:type] == 'iphone'
          models = ['iphone 4', 'iphone 4s', 'iphone 5', 'iphone 5c', 'iphone 5s', 'iphone 6', 'iphone 6+', 'iphone 6s', 'iphone 6s+', 'iphone se']
        elsif params[:type] == 'ipad'
          models = ['ipad 2', 'ipad 3', 'ipad 4', 'ipad mini', 'ipad mini 2', 'ipad mini 3', 'ipad air']
        elsif params[:type] == 'samsung'
          models = ['note', 'note 2', 'note 3', 'galaxy s3', 'galaxy s4', 'galaxy s5']
        else
          models = 'Unknown'
        end

        if models == 'Unknown'
          response = {
              status: 'failed'
          }
        else
          models_in_db = []
          prices.each {|i| models_in_db << i.model }
          missing_models = models - models_in_db
          missing_models.each do |model_name|
            Price.create(device_type: params[:type], issue: params[:issue], user_id: current_user.id, model: model_name)
          end
          prices = Price.where(device_type: params[:type], issue: params[:issue], user_id: current_user.id).order(:id)

          response = {
              status: 'success',
              prices: prices
          }
        end

        render json: {response: response}
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