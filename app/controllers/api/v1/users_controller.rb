module Api
    module V1
        class UsersController < ApplicationController

            skip_before_action :verify_authenticity_token, only: [:create, :destroy]
            before_action :authenticate_user, except: [:create]
            
            def index
                @users = User.all
                render json: {data:@users, status: "Ok"}
            end

            def show
                @user = User.find(params[:id])

                if @user
                    render json: {
                    user: @user
                    }
                else
                    render json: {
                    status: 500,
                    errors: ['user not found']
                     }
                end
             end

            def create
                @user = User.new(user_params)

                if @user.save
                    render json: {
                    user: @user
                }
                else 
                    render json: {
                    status: 500,
                    errors: @user.errors.full_messages
                }
                end
            end

            def destroy
                User.find_by(params[:email]).destroy

                render json: {status: 'Deleted'}
            end

            private 

            def user_params
                params.require(:api_v1_users).permit(:firstname, :lastname, :email, :password, :password_confirmation, :admin)
            end
        end
    end
end