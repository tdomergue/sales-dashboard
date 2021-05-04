class Customer < ApplicationRecord
  has_many :sales
  has_one :country, through: :sales
end
