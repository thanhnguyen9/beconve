Rails.application.routes.draw do
  devise_for :users
  root 'application#index'

  resources :checkouts,  only: [:new, :create, :show]

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :technicians
    end
  end

  get '*path' => 'application#index'
end
