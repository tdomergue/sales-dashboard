module Api
  module V1
    class CustomersController < ApplicationController
      def number_per_country
        country = Country.find(params[:country])
        customers = Customer.where(country: country).count

        render json: {customers: customers}
      end
    end
  end
end
