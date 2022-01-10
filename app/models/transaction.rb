class Transaction < ApplicationRecord
    belongs_to :user
    before_save :update_transaction_price
    after_create :update_crypto

    def update_transaction_price
        cryptoPrice = CryptoCurrency.find_by(currency_symbol: self.symbol)
        self.transaction_price = cryptoPrice.currency_price
    end

    def update_crypto
        crypto = CryptoCurrency.find_by(currency_symbol: self.symbol)
        if self.transcation_type == 'buy'
            supply = crypto.total_supply - self.amount
            price = crypto.market_cap / supply
            CryptoCurrency.update(crypto.id,
            {
                :total_supply => supply,
                :currency_price => price
            })
        elsif self.transcation_type == 'sell'
        end
    end
end
