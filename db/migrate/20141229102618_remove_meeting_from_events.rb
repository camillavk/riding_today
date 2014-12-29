class RemoveMeetingFromEvents < ActiveRecord::Migration
  def change
    remove_column :events, :meeting, :string
  end
end
