Rails.application.routes.draw do
  resources :crypto_currencies
  resources :transactions do
    collection do
      get "transaction_action/:id", to: "transactions#transaction_action"
    end
  end
  resources :wallets
  resources :portfolios do
    collection do
      get "see_owned/:id", to: "portfolios#see_owned"
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "home#index"
  get "Home", to: "home#index"

  get '*path', to: 'home#index', constraints: -> (request) do 
    !request.xhr? && request.format.html?
  end

  # post '/login',    to: 'sessions#create'
  # post '/logout',   to: 'sessions#destroy'
  # get '/logged_in', to: 'sessions#is_logged_in?'
  

  post 'user_token' => 'user_token#create'

  namespace 'api' do
    namespace 'v1' do 
      resources :users, only: [:create, :show, :edit, :update, :index, :destroy]

    end
  end
end
