Rails.application.routes.draw do
  root 'application#index'

  resources :checkouts,  only: [:new, :create, :show]

  get '*path' => 'application#index'
end
