class Volunteer < ApplicationRecord
    has_many :signups
    has_many :events, through: :signups

    validates :first_name, :last_name, :email, :password, presence: true
    validates :password, confirmation: true

    has_secure_password
end
