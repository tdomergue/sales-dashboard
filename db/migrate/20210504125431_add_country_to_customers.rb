class AddCountryToCustomers < ActiveRecord::Migration[6.1]
  def change
    add_reference :customers, :country, foreign_key: true
  end
end
