Rails.application.routes.draw do
  get 'sessions/create'
  resources :volunteers, only: [:index, :show, :create, :update]
  resources :signups, only: [:create, :update]
  resources :events
  post "/login", to: "sessions#create"
  get "/me", to: "volunteers#show"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "volunteers#create"

end
