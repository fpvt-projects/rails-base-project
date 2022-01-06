class CreateCryptoCurrencies < ActiveRecord::Migration[6.0]
  def change
    create_table :crypto_currencies do |t|
      t.string :currency_name
      t.integer :currency_id
      t.string :currency_symbol
      t.string :contract_id
      t.decimal :total_supply
      t.integer :market_cap
      t.string :currency_description
      t.decimal :buy_price
      t.decimal :sell_price

      t.timestamps
    end
  end
end
