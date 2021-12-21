module Api
    module V1
        class UsersController < ApplicationController
            def index
                user = User.all

                render json: {status: 'SUCCESS', message:'Users loaded', data: user}, status: :ok
            end
        end
    end
end