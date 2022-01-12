class PortfolioChanges < ActiveRecord::Migration[6.0]
  def change
    add_column :portfolios, :currency_symbol, :string
    add_column :portfolios, :currency_name, :string
    add_column :portfolios, :currency_amount, :decimal
  end
end
