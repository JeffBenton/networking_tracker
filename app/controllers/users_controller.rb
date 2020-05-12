class UsersController < ApplicationController

  def register
    user = User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password])
    if !user.error.empty?
      render json: { status: 400 }
    else
      render json: { status: 200 }
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user and user.authenticate(params[:password])
      render json: { status: 200 }
    else
      render json: { status: 400 }
    end
  end
end