class DropSpacesTable < ActiveRecord::Migration
  
  def up
      drop_table :spaces
    end

    def down
      raise ActiveRecord::IrreversibleMigration
    end

end
