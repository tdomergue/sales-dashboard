module Api
  module V1
    class SalesController < ApplicationController
      def revenue_per_country
        revenue = Sale.where(country_id: params[:country]).sum(:price)

        if revenue.zero? && params[:country] != "undefined"
          revenue = Sale.all.sum(:price)
        end

        render json: {revenue: revenue}
      end

      def revenue_per_month
        sales = Sale.where(country_id: params[:country])

        if sales.empty? && params[:country] != "undefined"
          sales = Sale.all
        end

        revenue_per_month = {}
        sales.each do |sale|
          if revenue_per_month[[sale.date.month, sale.date.year]]
            revenue_per_month[[sale.date.month, sale.date.year]] += sale.price
          else
            revenue_per_month[[sale.date.month, sale.date.year]] = sale.price
          end
        end

        render json: {revenue_per_month: revenue_per_month}
      end
    end
  end
end
