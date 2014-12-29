class EventsController < ApplicationController

	def index
		@events = Event.all
		@eventsToday = []
		@eventsTomorrow = []
		@events.each do |event| 
			if event.day == 'Today'
				@eventsToday << event
			else 
				@eventsTomorrow << event
			end
		end
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

	def events_day
		@eventsToday = []
		@eventsTomorrow = []
		@events = Event.all
		@events.each do |event| 
			if event.day == 'Today'
				@eventsToday << event
			else 
				@eventsTomorrow << event
			end
		end
	end
end
