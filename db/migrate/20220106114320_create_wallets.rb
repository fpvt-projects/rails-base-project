class CreateWallets < ActiveRecord::Migration[6.0]
  def change
    create_table :wallets do |t|
      t.integer :account_id
      t.decimal :balance

      t.timestamps
    end
  end
end
