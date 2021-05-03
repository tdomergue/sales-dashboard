Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/dashboard', to: 'pages#dashboard', as: 'dashboard'

  namespace :api do
    namespace :v1 do
      resources :sales, only: [:index] do
        collection do
          get ':country' => :sales_by_country, as: 'country'
        end
      end
    end
  end

  # get '*path', to: 'pages#home', via: :all
end
