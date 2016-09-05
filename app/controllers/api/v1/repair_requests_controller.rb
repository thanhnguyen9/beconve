module Api
  module V1
    class RepairRequestsController < ApplicationController

      def requests
        order = Order.where(user_id: current_user.id, request_status: 'open').first
        render json: {response: order}
      end

      def approve_request
        tech = User.find(params[:user_id])
        tech.status = 'offline'

        if tech.save
          order = Order.find(params[:id])
          order.request_status = 'approved'
          if order.save
            render json: {response: 'success'}
          else
            render json: {response: 'failed'}
          end
        else
          render json: {response: 'failed'}
        end
      end

      def decline_request
        order = Order.find(params[:id])
        order.request_status = 'declined'

        if order.save
          render json: {response: 'success'}
        else
          render json: {response: 'failed'}
        end
        # Update tech status
        # Update order status
        # Send email to BECONVE
      end

      def complete_request
        order = Order.where(user_id: current_user.id, request_status: 'approved').first
        render json: {response: order}
      end

      def complete_action
        tech = User.find(params[:user_id])
        tech.status = 'online'

        if tech.save
          order = Order.find(params[:id])
          order.request_status = 'completed'

          if order.save
            render json: {response: 'success'}
          else
            render json: {response: 'failed'}
          end
        else
          render json: {response: 'failed'}
        end
      end

      def cancel_action
        tech = User.find(params[:user_id])
        tech.status = 'online'

        if tech.save
          order = Order.find(params[:id])
          order.request_status = 'cancel'

          if order.save
            render json: {response: 'success'}
          else
            render json: {response: 'failed'}
          end
        else
          render json: {response: 'failed'}
        end
      end

      def update
        render json: {result: 'success'}
      end

    end
  end
end