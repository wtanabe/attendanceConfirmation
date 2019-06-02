Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'manage_attend_bord/index', to: 'manage_attend_bord#index'
  get 'create_attend_bord/index', to: 'create_attend_bord#index'
end
