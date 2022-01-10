#firstname:string
#lastname:string
#email:string
#password_digest:string

class User < ApplicationRecord
    has_secure_password 
    has_one :wallet
    has_many :portfolios
    has_many :transactions
    after_create :create_wallet
    # after_create :create_portfolio
    
    validates :email,:password_digest,:firstname,:lastname, presence: true
    validates :email, format: {with: /\A[^@\s]+@[^@\s]+\z/, message: "must be a valid email address"}
    validates :email, uniqueness: true

    def create_wallet
        Wallet.create({user_id:self.id, balance: 100})
    end

    # def create_portfolio
    #     Portfolio.create({account_id:self.id})
    # end
end
