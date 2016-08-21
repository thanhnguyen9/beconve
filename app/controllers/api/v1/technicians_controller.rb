module Api
  module V1
    class TechniciansController < ApplicationController

      def index
        response = {
            id: 1,
            name: 'CPR Cell Phone Repair Dallas Uptown',
            warranty: '1 month',
            distance: '3 mile',
            intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec mi a ma',
            price: '110',
            responseTime: '2 minutes',
            rating: '4.5',
            images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'
        }, {
            id: 2,
            name: 'Cell Tech',
            warranty: '1 month',
            distance: '4 mile',
            intro: 'Sollicitudin. Aenean auctor consequat mauris, a pharetra elit scele',
            responseTime: '1 minutes',
            rating: '4.8',
            images: 'http://files.hgsitebuilder.com/hostgator260927/image/cellphonefront1.jpg',
            price: '110'
        },{
            id: 3,
            name: 'Cellular Geek',
            warranty: '1 month',
            price: '110',
            distance: '3 mile',
            intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
            responseTime: '1 minutes',
            rating: '4.9',
            images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'

        },{
            id: 4,
            name: 'Best fix',
            warranty: '1 month',
            price: '110',
            distance: '3 mile',
            intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
            responseTime: '1 minutes',
            rating: '4.9',
            images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'

        },{
            id: 5,
            name: 'Repair for you',
            warranty: '1 month',
            price: '110',
            distance: '3 mile',
            intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
            responseTime: '1 minutes',
            rating: '4.9',
            images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'

        },{
            id: 6,
            name: 'Geek fix',
            warranty: '1 month',
            distance: '3 mile',
            price: '110',
            intro: 'sque ac. Praesent nisi tortor, auctor at rutrum vitae, blandit sit amet ',
            responseTime: '1 minutes',
            rating: '4.9',
            images: 'http://images.cellphonerepair.com/dallas-north-tx/wp-content/uploads/sites/83/2014/08/cell-phone-repair-tx-dallas-uptown.jpg'

        }
        render json:response
      end

      def show
        user = User.find(params[:id])
        data = {status: 'online'}
        render json: {response: data}
      end

      def update
        render json: {result: 'success'}
      end

      def tech_request
        binding.pry
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

      def technician_params

      end
    end
  end
end