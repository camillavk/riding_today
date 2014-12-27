class EventsController < ApplicationController

	def index
		@events = Event.all
	end

	def new
		@event = Event.new
	end

	def create
		@event = Event.create(event_params)
		redirect_to '/'
	end

	def event_params
		params.require(:event).permit(:area, :level, :plan, :meeting, :space)
	end
end
