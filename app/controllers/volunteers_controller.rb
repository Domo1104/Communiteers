class VolunteersController < ApplicationController
    #GET /volunteers
    def index
        volunteer = Volunteer.all
        render json: volunteer
    end

    #GET /volunteers/:id
    def show
        volunteer = find_volunteer
        render json: volunteer, status: :ok
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
    
    private

    def find_volunteer
        Volunteer.find_by(id: params[:id])
    end
    
    def volunteer_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
