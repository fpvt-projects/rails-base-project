class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.integer :account_id
      t.integer :transaction_id

      t.timestamps
    end
  end
end
