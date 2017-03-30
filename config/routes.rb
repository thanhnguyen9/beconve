Rails.application.routes.draw do

  devise_for :users, :controllers => {
      :registrations => "registrations",
      :omniauth_callbacks => "omniauth_callbacks"
  }

  devise_scope :user do
    match 'host/sign_up', to: 'registrations#new', user: { role: 'host' }, via: [:get]
    match 'user/sign_up', to: 'registrations#new', user: { role: 'customer' }, via: [:get]
  end

  root 'application#index'

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :available_cities
      resources :shops
      resources :checkouts,  only: [:new, :create, :show]
      resources :prices, only: [:index, :create, :update, :show]
      resources :business_hours

      get '/technicians/complete_request' => 'technicians#complete_request'
      put '/technicians/repair_request/approve' => 'technicians#approve'

      get '/repair_requests/requests' => 'repair_requests#requests'
      put '/repair_requests/approve_request' => 'repair_requests#approve_request'
      put '/repair_requests/decline_request' => 'repair_requests#decline_request'
      get '/repair_requests/complete_request' => 'repair_requests#complete_request'
      put '/repair_requests/complete_action' => 'repair_requests#complete_action'
      put '/repair_requests/cancel_action' => 'repair_requests#cancel_action'
    end
  end
  get '/shops/host_sign_up' => 'tests#host_sign_up'
  get '*path' => 'application#index'
end
