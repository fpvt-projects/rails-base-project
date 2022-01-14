require 'rails_helper'

RSpec.describe User, type: :model do
    
    let!(:user) {User.new}

    context 'Input validations' do
        it '- email should not be empty.' do
            user.email = nil
            user.firstname = "testfirstname" 
            user.lastname = "testsurname"
            user.password = '12345'
            user.password_confirmation = '12345'

            expect(user).to_not be_valid
            expect(user.errors).to be_present
            expect(user.errors.to_hash.keys).to include(:email)
        end

        it '- email should be unique.' do
            User.create(:email => 'testemail@gmail.com', :firstname => 'testfirstname', :lastname => 'testlastname', :password => '12345', :password_confirmation => '12345')
            user.email = "testemail@gmail.com"
            user.firstname = "testfirstname1" 
            user.lastname = "testsurname1"
            user.password = '12345'
            user.password_confirmation = '12345'

            expect(user).to_not be_valid
            expect(user.errors).to be_present
            expect(user.errors.to_hash.keys).to include(:email)
        end

        it '- firstname should not be empty.' do
            user.email = "testemail@gmail.com"
            user.firstname = nil 
            user.lastname = "testsurname"
            user.password = '12345'
            user.password_confirmation = '12345'

            expect(user).to_not be_valid
            expect(user.errors).to be_present
            expect(user.errors.to_hash.keys).to include(:firstname)
        end

        it '- lastname should not be empty.' do
            user.email = "testemail@gmail.com"
            user.firstname = "testfirstname" 
            user.lastname = nil
            user.password = '12345'
            user.password_confirmation = '12345'

            expect(user).to_not be_valid
            expect(user.errors).to be_present
            expect(user.errors.to_hash.keys).to include(:lastname)
        end
        it '- password should not be empty.' do
            user.email = "testemail@gmail.com"
            user.firstname = "testfirstname" 
            user.lastname = "testsurname"
            user.password = nil
            user.password_confirmation = '12345'

            expect(user).to_not be_valid
            expect(user.errors).to be_present
            expect(user.errors.to_hash.keys).to include(:password_digest)
        end
        it '- password_confirmation should match password.' do
            user.email = "testemail@gmail.com"
            user.firstname = "testfirstname" 
            user.lastname = "testsurname"
            user.password = '12345'
            user.password_confirmation = '12345'

            expect(user.password_confirmation).to be == user.password
            expect(user.errors).to_not be_present
        end
    end

    context 'Creation' do 
        it '- should have one item created after registration.' do
            User.create(:email => 'testemail@gmail.com', :firstname => 'testfirstname', :lastname => 'testlastname', :password => '12345', :password_confirmation => '12345')
            expect(User.all.count).to eq(1)
        end
    end
end