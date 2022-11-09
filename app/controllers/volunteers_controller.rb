class VolunteersController < ApplicationController
    #GET /volunteers
    def index
        volunteer = Volunteer.all
        render json: volunteer
    end

    #GET /volunteers/:id
    def show
        volunteer = Volunteer.find_by(id: session[:user_id])
        if volunteer
          render json: volunteer
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
    
    #POST /volunteers/:id
    def create
        volunteer = Volunteer.create!(volunteer_params)
        render json: volunteer, status: :created
    end

    #PATCH /volunteers/:id
    def update
        volunteer = find_volunteer
        volunteer.update(volunteer_params)
        render json: volunteer
    end

    def check_email
        return unless params[:email].present?
      
        volunteer = Volunteer.find_by_email(params[:email].downcase)
        return 'taken' if Recurly::Account.find(volunteer)
        'available'
    end
    
    private

    def find_volunteer
        Volunteer.find_by(id: params[:id])
    end
    
    def volunteer_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
