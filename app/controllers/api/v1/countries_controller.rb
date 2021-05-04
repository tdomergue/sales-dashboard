module Api
  module V1
    class CountriesController < ApplicationController
      def index
        countries = Country.all.order("name")

        render json: CountrySerializer.new(countries).serialized_json
      end
    end
  end
end
