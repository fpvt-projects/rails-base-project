json.extract! crypto_stock, :id, :symbol, :user_id, :cost_per, :amount_owned, :created_at, :updated_at
json.url crypto_stock_url(crypto_stock, format: :json)
