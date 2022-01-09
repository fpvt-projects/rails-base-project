class AdditionalFields < ActiveRecord::Migration[6.0]
  def change
    add_column :transactions, :transcation_type, :string
    add_column :transactions, :symbol, :string
    add_column :transactions, :amount, :decimal
    add_column :transactions, :transaction_price, :integer
    add_column :portfolios, :crypto_symbol, :string
    add_column :portfolios, :crypto_amount, :decimal
    add_column :portfolios, :symbol_balance, :decimal
  end
end
