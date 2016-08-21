Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }

  root 'application#index'

  resources :checkouts,  only: [:new, :create, :show]

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :technicians

      get '/technicians/complete_request' => 'technicians#complete_request'
      put '/technicians/repair_request/approve' => 'technicians#approve'

      get '/repair_requests/requests' => 'repair_requests#requests'
      put '/repair_requests/approve_request' => 'repair_requests#approve_request'
      put '/repair_requests/decline_request' => 'repair_requests#decline_request'
      put '/repair_requests/complete_request' => 'repair_requests#complete_request'
    end
  end

  get '*path' => 'application#index'
end
