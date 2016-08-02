Rails.application.routes.draw do
  devise_for :users
  root 'application#index'

  resources :checkouts,  only: [:new, :create, :show]

  get '*path' => 'application#index'
end
