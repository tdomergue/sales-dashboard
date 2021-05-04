class AddReferencesToSales < ActiveRecord::Migration[6.1]
  def change
    add_reference :sales, :order, null: false, foreign_key: true
    add_reference :sales, :customer, null: false, foreign_key: true
    add_reference :sales, :country, null: false, foreign_key: true
  end
end
