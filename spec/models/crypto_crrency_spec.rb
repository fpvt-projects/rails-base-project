require 'rails_helper'

RSpec.describe CryptoCurrency, type: :model do
    context 'Creation' do 
        it '- should automatically generate contract id.' do 
            CryptoCurrency.create(:id => 1, :currency_name => 'test', :currency_symbol => 'test', :total_supply => 100, :market_cap => 100, :currency_description => 'test', :currency_price => 100)
            expect(CryptoCurrency.find(1).contract_id).not_to be(nil)
        end
    end
end

