#firstname:string
#lastname:string
#email:string
#password_digest:string

class User < ApplicationRecord
    has_secure_password 

    validates :email,:password_digest,:firstname,:lastname, presence: true
    validates :email, format: {with: /\A[^@\s]+@[^@\s]+\z/, message: "must be a valid email address"}
end
