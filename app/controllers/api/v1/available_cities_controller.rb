module Api
  module V1
    class AvailableCitiesController < ApplicationController

      def index
        render json: {status: 'success', response: AvailableCity.order('name ASC')}
      end

      def create
        city = AvailableCity.new(city_params)
        if city.save
          render json: {response: 'success'}
        else
          render json: {response: 'failed'}
        end
      end

      def update
        city = AvailableCity.find(params[:id])

        if city.update(city_params)
          render json: {response: 'success'}
        else
          render json: {response: 'failed'}
        end
      end

      private

      def city_params
        params.require(:available_cities).permit(:name)
      end

    end
  end
end