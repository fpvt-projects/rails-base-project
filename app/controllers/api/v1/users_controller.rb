module Api
    module V1
        class UsersController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index
                user = User.all
                render json: {status: 'SUCCESS', message:'Users loaded!', data: user}, status: :ok
            end

            def new
            end

            def create
                user = User.new(user_params)

                if user.save
                    render json: {status: 'SUCCESS', message:'User successfully created!', data: user}, status: :ok
                else 
                    render json: {error: user.errors.messages}, status: 422
                end
            end

            private 

            def user_params
                params.require(:api_v1_users).permit(:firstname, :lastname, :email, :password, :password_confirmation, :admin)
            end
        end
    end
end