module Api
  module V1
    class OrdersController < ApplicationController
      def average_revenue_per_country
        average_revenue = Order.where(country_id: params[:country]).average(:total_price)
        
        if average_revenue.nil? && params[:country] != "undefined"
          average_revenue = Order.all.average(:total_price)
        end
        
        render json: {average_revenue: average_revenue}
      end
    end
  end
end
