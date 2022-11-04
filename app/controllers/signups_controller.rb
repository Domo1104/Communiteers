class SignupsController < ApplicationController
    #POST /signups/:id
    def create
        signup = Signup.create!(signup_params)
        render json: signup, status: :created
    end

    #PATCH /signups/:id
    def update
        signup = find_signup
        signup.update(signup_params)
        render json: signup
    end

    private

    def find_signup
        Signup.find_by(id: params[:id])
    end

    def signup_params
        params.permit(:event_id, :volunteer_id, :task)
    end

end
