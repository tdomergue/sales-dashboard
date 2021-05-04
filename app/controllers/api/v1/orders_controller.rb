module Api
  module V1
    class OrdersController < ApplicationController
      def average_revenue_per_country
        orders = Order.where(country_id: params[:country])
        
        if orders.empty? && params[:country] != "undefined"
          orders = Order.all
        end
        
        average_revenue = orders.sum(:sales.price) / orders.length
        
        render json: {average_revenue: average_revenue}
      end
    end
  end
end
