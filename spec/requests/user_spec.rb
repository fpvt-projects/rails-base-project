require 'rails_helper'

RSpec.describe 'UsersController', type: :request do 
    # before { allow(controller).to receive(:authenticate_user).and_return(true) }

    describe "GET /api/v1/users " do 
        it '- should return the index.' do 
            get "/api/v1/users"
            expect(response).to have_http_status(:success)
        end
    end

    describe "POST /api/v1/users" do
        it '- should be able to register new user.' do 
            post "/api/v1/users" , :params => { :api_v1_users => {
                :firstname => "test",
                :lastname => "test",
                :email => "test@test",
                :password => "12345",
                :password_confirmation => "12345"
            }}
            expect(response).to have_http_status(:success)
            expect(User.all.count).to eq(1)
        end
    end

    describe "PATCH /api/v1/users/:id" do 
        it '- should be able to edit a user.' do
            User.create(:id => 1, :email => 'testemail@gmail.com', :firstname => 'testfirstname', :lastname => 'testlastname', :password => '12345', :password_confirmation => '12345')
          
            patch "/api/v1/users/1" , :params => { :api_v1_users => {:firstname => 'test2'}}
            expect(response).to have_http_status(:success)
            expect(User.find(1).firstname).to be == 'test2'
        end
    end

    # describe "DELETE /api/v1/users/:id " do 
    #     it '- should be able to delete a user.' do
    #         User.create(:id => 1, :email => 'testemail@gmail.com', :firstname => 'testfirstname', :lastname => 'testlastname', :password => '12345', :password_confirmation => '12345')
            
            
    #         delete "/api/v1/users/1" 
    #         expect(response).to have_http_status(:success)
    #     end
    # end

end
