class EventsController < ApplicationController

	def index
		@events = Event.all
	end

	def new
		@event = Event.new
	end

	def create
		@event = Event.new(event_params)
		@event.user = current_user
		@event.save
		redirect_to '/'
	end

	def event_params
		params.require(:event).permit(:area, :level, :plan, :meeting, :space, :day)
	end
end
