class EventsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]

    #GET /events
    def index
        event = Event.all
        render json: event
    end

    #GET /events/:id
    def show
        event = Event.find_by(id: params[:id])
        render json: event, status: :ok
    end

    #POST /events/:id
    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    #PATCH /events/:id
    def update
        event = find_event
        event.update(event_params)
        render json: event
    end

    #DELETE /events/:id
    def destroy
        event = find_event
        event.destroy
        head :no_content
    end

    private

    def find_event
        Event.find_by(id: params[:id])
    end

    def event_params
        params.permit(:title, :start_date_time, :end_date_time, :location, :category, :description)
    end


    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
