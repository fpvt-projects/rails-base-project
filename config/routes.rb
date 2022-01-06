Rails.application.routes.draw do
<<<<<<< HEAD
  resources :crypto_currencies
  resources :transactions
  resources :wallets
  resources :portfolios
  resources :crypto_stocks
=======

>>>>>>> d9e2e7544a8e253841f703545c5ba202d13880ce
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "home#index"
  get "Home", to: "home#index"

  get '*path', to: 'home#index', constraints: -> (request) do 
    !request.xhr? && request.format.html?
  end

  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  post 'user_token' => 'user_token#create'

  namespace 'api' do
    namespace 'v1' do 
      resources :users, only: [:create, :show, :index, :destroy]
    end
  end
end
