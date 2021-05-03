class CreateSales < ActiveRecord::Migration[6.1]
  def change
    create_table :sales do |t|
      t.date :date
      t.integer :order
      t.integer :customer
      t.string :country
      t.float :price

      t.timestamps
    end
  end
end
