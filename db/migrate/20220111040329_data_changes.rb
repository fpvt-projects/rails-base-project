class DataChanges < ActiveRecord::Migration[6.0]
  def change
    #Transactions-Table
    remove_column :transactions, :transaction_id
    remove_column :transactions, :transcation_type
    remove_column :transactions, :symbol
    remove_column :transactions, :amount
    remove_column :transactions, :transaction_price

    add_column :transactions, :txn_hash, :string
    add_column :transactions, :txn_type, :string
    add_column :transactions, :currency_symbol, :string
    add_column :transactions, :currency_amount, :decimal
    add_column :transactions, :txn_price, :decimal

    #Portfolios-Table
    remove_column :portfolios, :crypto_symbol
    remove_column :portfolios, :crypto_amount
    remove_column :portfolios, :symbol_balance

    add_column :portfolios, :portfolio_id, :string
    #Wallets-Table
    add_column :wallets, :wallet_address, :string

  end
end
