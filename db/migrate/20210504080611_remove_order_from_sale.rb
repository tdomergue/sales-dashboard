class RemoveOrderFromSale < ActiveRecord::Migration[6.1]
  def change
    remove_column :sales, :order
    remove_column :sales, :customer
    remove_column :sales, :country
  end
end
