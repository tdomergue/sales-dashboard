class CountrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name

  # has_many :sales
end
