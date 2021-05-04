class Sale < ApplicationRecord
  belongs_to :order
  belongs_to :customer
  belongs_to :country
end
