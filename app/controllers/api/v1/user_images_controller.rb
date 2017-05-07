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
        image = UserImage.find(id: params[:id])
        response = {
            images: image,
            status: 'success'
        }
        render json: {response: response}
      end

      def create
        @user_file = UserImage.new(user_image_params)
        binding.pry
        if @user_file.save
          images = UserImage.where(user_id: params[:user_image][:user_id]).order('created_at DESC')
          response = {
              images: images,
              status: 'success'
          }
          render json: {response: response}
        else
          response = {
              status: 'failed',
              message: @user_file.errors
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
