class CreateEventDates < ActiveRecord::Migration[5.0]
  def change
    create_table :event_dates do |t|
      t.string :event_date, :limit => 10, :null => false
      t.boolean :delete_flg

      t.timestamps
    end
  end
end
