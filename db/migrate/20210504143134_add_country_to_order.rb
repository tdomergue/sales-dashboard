class AddCountryToOrder < ActiveRecord::Migration[6.1]
  def change
    add_reference :orders, :country, foreign_key: true
  end
end
