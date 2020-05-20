class User < ApplicationRecord
  has_many :connections
  has_many :interactions
  has_secure_password

  validates :email, uniqueness: true, format: { with: URI::MAILTO::EMAIL_REGEXP}, presence: true
  validates :password, presence: true, on: create
end
