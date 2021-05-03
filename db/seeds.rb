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

csv_options = { col_sep: ',', quote_char: '"', headers: :first_row }
filepath = 'db/memory-tech-challenge-data.csv'

i = 0
CSV.foreach(filepath, csv_options) do |row|
  Sale.create!({
    date: Date.parse(row['date']),
    order: row['order_id'].to_i,
    customer: row['customer_id'].to_i,
    country: row['country'],
    price: row['quantity'].to_i * row['unit_price'].to_f
  })
  i += 1
  puts "#{i}       / 406829"
end

puts "#{Sale.count} sales well and slowly imported!"
