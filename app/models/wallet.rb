class Wallet < ApplicationRecord
    belongs_to :user

    def self.update_wallet_balance(transaction)
        if transaction.txn_type == 'sell'
            amount = transaction.txn_price
          elsif transaction.txn_type == 'buy'
            amount = transaction.txn_price * -1
          end
            wallet = User.find(transaction.user_id).wallet
            wallet.balance += amount * transaction.currency_amount
            wallet.save!
    end

    def self.check_actual_balance(userid)
      User.find(userid).wallet.balance
    end
end
