Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: "application#index"
  resources :people, only: [:index, :show]
  resources :planets, only: [:index, :show]
  # resources :vehicles, only: [:index, :show]
  # resources :starships, only: [:index, :show]
  # resources :species, only: [:index, :show]
  # resources :films, only: [:index, :show]
end
