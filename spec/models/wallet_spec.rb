require 'rails_helper'

RSpec.describe Wallet, type: :model do
    context 'Creation' do 
        it '- should automatically be created after user register.' do
            User.create(:email => 'testemail@gmail.com', :firstname => 'testfirstname', :lastname => 'testlastname', :password => '12345', :password_confirmation => '12345')
            expect(Wallet.all.count).to eq(1)
        end
    end

end