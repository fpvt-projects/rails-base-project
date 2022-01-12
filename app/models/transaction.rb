class Transaction < ApplicationRecord
    validate :check_balance
    validates :currency_amount, numericality:true

    belongs_to :user
    before_save :update_transaction_price
    after_create :update_wallet_balance
    after_create :update_crypto
    after_create :update_portfolio

    def check_balance
        cryptoPrice = CryptoCurrency.find_by(currency_symbol: self.currency_symbol)
        self.txn_price = cryptoPrice.currency_price
        
        if self.txn_type == 'buy'
            wallet = User.find(self.user_id).wallet
            if wallet.balance < self.currency_amount * self.txn_price
                errors.add(:currency_amount, 'Insufficient-Balance')
            end
        elsif self.txn_type == 'sell'
            pbalance = Portfolio.find_by(currency_symbol: self.currency_symbol)
            if pbalance.currency_amount < self.currency_amount
                errors.add(:currency_amount, 'Insufficient-Token')
            end
        end
    end

    def update_wallet_balance
        Wallet.update_wallet_balance(self)
    end

    def update_transaction_price
        cryptoPrice = CryptoCurrency.find_by(currency_symbol: self.currency_symbol)
        self.txn_price = cryptoPrice.currency_price
    end

    def update_crypto
        crypto = CryptoCurrency.find_by(currency_symbol: self.currency_symbol)
        if self.txn_type == 'buy'
            supply = crypto.total_supply - self.currency_amount
            
        elsif self.txn_type == 'sell'
            supply = crypto.total_supply + self.currency_amount
        end

        price = crypto.market_cap / supply
            CryptoCurrency.update(crypto.id,
            {
                :total_supply => supply,
                :currency_price => price
            })

        def update_portfolio
            Portfolio.update_portfolio(self)
        end

    end
end
