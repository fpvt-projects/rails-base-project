class CreateCryptoStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :crypto_stocks do |t|
      t.string :symbol
      t.integer :user_id
      t.decimal :cost_per
      t.decimal :amount_owned

      t.timestamps
    end
    add_index :crypto_stocks, :user_id
  end
end
