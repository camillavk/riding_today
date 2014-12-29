require 'spec_helper'

RSpec.describe Event, :type => :model do 
	xit 'saves an event' do
		event = Event.create(area: 'here', level: 'Beginner', plan: 'Piste', space: 'Three', day: 'Today', meeting: '14:45')
		expect(Event.count).to eq(3)
	end
end
