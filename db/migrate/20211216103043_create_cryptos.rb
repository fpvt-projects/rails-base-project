class CreateCryptos < ActiveRecord::Migration[6.0]
  def change
    create_table :cryptos do |t|
      t.string :symbol
      t.string :coin

      t.timestamps
    end
  end
end
