Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "home#index"
  get "Home", to: "home#index"
  get '*path', to: 'home#index'
  
  get "sign_up", to: "registrations#new"
  post "sign_up", to: "registrations#create"

  namespace 'api' do
    namespace 'v1' do 
      resources :users
    end
  end
end
