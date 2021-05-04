Rails.application.routes.draw do
  get 'countries/index'
  devise_for :users
  root to: 'pages#home'
  get '/dashboard', to: 'pages#dashboard', as: 'dashboard'

  namespace :api do
    namespace :v1 do
      resources :countries, only: [:index]
      get '/customers/:country', to: 'customers#number_per_country'
      get '/sales/:country', to: 'sales#revenue_per_country'
      get '/orders/:country', to: 'orders#average_revenue_per_country'
      get '/sales/:country/monthly', to: 'sales#revenue_per_month'
    end
  end

end
