class CreateEventDateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :event_date_comments do |t|
      t.string :event_date_comment, :limit => 20, :null => false
      t.boolean :delete_flg

      t.timestamps
    end
  end
end
