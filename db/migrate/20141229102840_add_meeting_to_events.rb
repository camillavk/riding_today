class AddMeetingToEvents < ActiveRecord::Migration
  def change
    add_column :events, :meeting, :time
  end
end
