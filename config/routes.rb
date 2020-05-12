Rails.application.routes.draw do
  scope '/api' do
    post 'register', to: 'users#register'
    post 'login', to: 'users#login'
  end
end
