module Api
  module V1
    class UserImagesController < ApplicationController

      def index
        images = UserImage.where(user_id: params[:user_id])
        response = {
            images: images,
            status: 'success'
        }
        render json: {response: response}
      end

      def show
        image = UserImage.find(params[:id])
        response = {
            image: image,
            status: 'success'
        }
        render json: {response: response}
      end

      def create
        image = UserImage.new(user_image_params)
        if image.save
          images = UserImage.where(user_id: params[:user_image][:user_id]).order('created_at DESC')
          response = {
              images: images,
              status: 'success'
          }
          render json: {response: response}
        else
          response = {
              status: 'failed',
              message: image.errors
          }
          render json: {response: response}
        end
      end

      def update
        image = UserImage.find(params[:id])
        if image.update(user_image_params)
          response = {
              image: image,
              status: 'success'
          }
          render json: {response: response}
        else
          response = {
              status: 'failed',
              message: image.errors
          }
          render json: {response: response}
        end
      end
      private

      def user_image_params
        params.require(:user_image).permit(:image, :user_id)
      end
    end
  end
end
