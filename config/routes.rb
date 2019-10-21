Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  namespace :api, defaults: {format: :json} do
    resources :sneakers, only: [:index, :show] do
      resources :listings, only: [:index, :show]
      get 'search', on: :collection
    end
    resources :users, only: [:new, :create]
    resource :session, only: [:create, :destroy]  
    resources :cart_items, only: [:index, :create, :destroy]
  end
  root to: "static_pages#root"
end
