module Api
  module V1
    class SalesController < ApplicationController
      def index
        sales = Sale.all
        countries = ["All"]
        sales.each do |sale|
          countries << sale.country
        end
        countries = countries.uniq.sort

        render json: {countries: countries}
      end

      def sales_by_country
        if params[:country] == "All"
          sales = Sale.all
        else
          sales = Sale.where(country: params[:country])
        end

        total_revenue = 0
        revenue_per_order = {}
        customers = []
        revenue_per_month = {}

        sales.each do |sale|
          total_revenue += sale.price
          if revenue_per_order[sale.order]
            revenue_per_order[sale.order] += sale.price
          else
            revenue_per_order[sale.order] = sale.price
          end
          customers << sale.customer
          if revenue_per_month[[sale.date.month, sale.date.year]]
            revenue_per_month[[sale.date.month, sale.date.year]] += sale.price
          else
            revenue_per_month[[sale.date.month, sale.date.year]] = sale.price
          end
        end

        average_revenue_per_order = revenue_per_order.values.sum / revenue_per_order.keys.length
        customers_number = customers.uniq.length

        render json: {total_revenue: total_revenue, average_revenue_per_order: average_revenue_per_order, customers_number: customers_number, revenue_per_month: revenue_per_month}
      end
    end
  end
end
