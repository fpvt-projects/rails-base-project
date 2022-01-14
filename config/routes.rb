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
  
 
  root "home#index"
  get "Home", to: "home#index"

  get '*path', to: 'home#index', constraints: -> (request) do 
    !request.xhr? && request.format.html?
  end

  post 'user_token' => 'user_token#create'

  namespace 'api' do
    namespace 'v1' do 
      resources :users, only: [:create, :show, :edit, :update, :index, :destroy]
      get '/todayQuotes', to: 'quote#index'

    end
  end

  


end
