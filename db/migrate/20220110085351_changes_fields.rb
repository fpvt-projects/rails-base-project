class ChangesFields < ActiveRecord::Migration[6.0]
  def change
    remove_column :transactions, :account_id
    remove_column :wallets, :account_id
    remove_column :portfolios, :account_id

    add_reference :wallets, :user, foreign_key: true
    add_reference :transactions, :user, foreign_key: true
    add_reference :portfolios, :user, foreign_key: true
  end
end
