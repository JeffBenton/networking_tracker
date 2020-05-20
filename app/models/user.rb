class User < ApplicationRecord
  has_many :connections
  has_many :interactions
  has_secure_password
end
