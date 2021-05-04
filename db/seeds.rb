# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

puts "Parsing the data.csv to inject it in DB, you can go grab a coffee (even in Brazil) and come back..."
puts "Sales imported :"

Sale.destroy_all
Order.destroy_all
Customer.destroy_all
Country.destroy_all
User.destroy_all

csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }
filepath = 'db/memory-tech-challenge-data.csv'

i = 0
CSV.foreach(filepath, csv_options) do |row|

  sale = Sale.new({
    date: Date.parse(row['date']),
    price: row['quantity'].to_i * row['unit_price'].to_f
  })

  order = Order.where(numero: row['order_id']).first
  if order
    sale.order = order
  else
    sale.order = Order.create!(numero: row['order_id'])
  end

  customer = Customer.where(numero: row['customer_id']).first
  if customer
    sale.customer = customer
  else
    sale.customer = Customer.create!(numero: row['customer_id'])
  end

  country = Country.where(name: row['country']).first
  if country
    sale.country = country
  else
    sale.country = Country.create!(name: row['country'])
  end

  sale.save!

  i += 1
  puts "#{i}       / 406829"
end

puts "#{Sale.count} sales well and slowly imported!"
puts "#{Order.count} Orders well and slowly imported!"
puts "#{Customer.count} Customers well and slowly imported!"
puts "#{Country.count} Countres well and slowly imported!"

User.create!({
  email: "memory@memory.memory",
  password: "memory"
})

puts "NB : user created"
puts "email: memory@memory.memory"
puts "password : memory"

customers = Customer.all
customers.each do |customer|
  customer.country_id = customer.sales.first.country_id
  customer.save!
end
orders = Order.all
orders.each do |order|
  order.country_id = order.sales.first.country_id
  order.save!
end
orders = Order.all
orders.each do |order|
  order.total_price = 0
  order.sales.each do |sale|
    order.total_price += sale.price
  end
  order.save!
end

Country.create!(name:"All")
