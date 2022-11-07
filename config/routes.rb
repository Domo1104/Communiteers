Rails.application.routes.draw do
  resources :volunteers, only: [:index, :show, :create, :update]
  resources :signups, only: [:create, :update]
  resources :events
  Post "/login", to: "sessions#create"

end
