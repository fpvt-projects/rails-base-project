require 'rails_helper'

RSpec.describe 'TransactionController', type: :request do 
    describe 'GET /transactions' do 
        it '- should return the index' do 
            get '/transactions'
            expect(response).to have_http_status(:success)
        end
    end
    
    describe 'GET /transactions/transaction_action/:id' do 
        it '- should return the transaction_action.' do
            User.create(:id => 1, :email => 'testemail@gmail.com', :firstname => 'testfirstname', :lastname => 'testlastname', :password => '12345', :password_confirmation => '12345')
            
            get '/transactions/transaction_action/1'
            expect(response).to have_http_status(:success)
        end
    end
end