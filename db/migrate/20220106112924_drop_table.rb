class DropTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :coin_prices
    drop_table :crypto_stocks
    drop_table :cryptos
  end
end
