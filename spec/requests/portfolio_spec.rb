require 'rails_helper'

RSpec.describe 'PortfolioController', type: :request do 
    describe 'GET /portfolios' do 
        it '- should return the index.' do 
            get "/portfolios"
            expect(response).to have_http_status(:success)
        end
    end

    describe 'GET /portfolios/see_owned/:id' do 
        it '- shoud return the owned currencies of the user.' do 
            User.create(:id => 1, :email => 'testemail@gmail.com', :firstname => 'testfirstname', :lastname => 'testlastname', :password => '12345', :password_confirmation => '12345')
        
            get '/portfolios/see_owned/1'
            expect(response).to have_http_status(:success)
        end
    end
end