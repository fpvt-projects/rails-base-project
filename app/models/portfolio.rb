class Portfolio < ApplicationRecord
    belongs_to :user

    def self.update_portfolio(transaction)
        if transaction.txn_type == 'buy'
            amount = transaction.currency_amount
          elsif transaction.txn_type == 'sell'
            amount = transaction.currency_amount * -1
          end
            current_user = User.find(transaction.user_id)
            if current_user.portfolio.exists?(currency_symbol: transaction.currency_symbol)
                sym = current_user.portfolio.find_by(currency_symbol: transaction.currency_symbol)
                current_user.portfolio.update(sym.id,
                {
                    :currency_amount => sym.currency_amount + amount
                })
            else Portfolio.create!({:user_id => transaction.user_id, :currency_symbol => transaction.currency_symbol, :currency_amount => transaction.currency_amount})   
        end
    end

    def self.check_owned_currency(userid)
        User.find(userid).portfolio.all
    end
end
