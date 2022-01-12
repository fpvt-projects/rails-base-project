class RemoveField < ActiveRecord::Migration[6.0]
  def change
    remove_column :crypto_currencies, :currency_id
    remove_column :crypto_currencies, :buy_price
    remove_column :crypto_currencies, :sell_price
    add_column :crypto_currencies, :currency_price, :decimal
  end
end
