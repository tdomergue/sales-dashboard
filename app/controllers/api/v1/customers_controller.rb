module Api
  module V1
    class CustomersController < ApplicationController
      def number_per_country
        customers = Customer.where(country_id: params[:country]).count

        if customers.zero? && params[:country] != "undefined"
          customers = Customer.count
        end

        render json: {customers: customers}
      end
    end
  end
end
