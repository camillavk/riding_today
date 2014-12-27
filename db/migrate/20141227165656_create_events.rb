class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :area
      t.string :level
      t.string :plan
      t.time :meeting
      t.integer :space

      t.timestamps null: false
    end
  end
end
