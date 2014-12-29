class CreateSpaces < ActiveRecord::Migration
  def change
    create_table :spaces do |t|
      t.belongs_to :event, index: true

      t.timestamps null: false
    end
    add_foreign_key :spaces, :events
  end
end
