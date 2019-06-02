class CreateAttendances < ActiveRecord::Migration[5.0]
  def change
    create_table :attendances do |t|
      t.string :event_id, :limit => 10, :null => false
      t.string :event_date_id, :limit => 10, :null => false
      t.string :event_date_comment_id, :limit => 10, :null => false
      t.string :participant_id, :limit => 10, :null => false
      t.integer :attendance, :limit => 1, :null => false
      t.boolean :delete_flg

      t.timestamps
    end
  end
end
