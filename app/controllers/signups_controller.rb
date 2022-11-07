class SignupsController < ApplicationController
    before_action :authorize
    #POST /signups/:id
    def create
        signup = Signup.create(signup_params)
        render json: signup, status: :created
      end

    #PATCH /signups/:id
    def update
        signup = find_signup
        signup.update(params.permit(:task))
        render json: signup
    end

    private

    def find_signup
        Signup.find_by(id: params[:id])
    end

    def signup_params
        params.permit(:event_id, :task, volunteer_id: session[:user_id])
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end
