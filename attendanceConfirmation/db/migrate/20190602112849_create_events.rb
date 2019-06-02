class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :event_name, :limit => 30, :null => false
      t.text :event_content, :limit => 200
      t.boolean :delete_flg

      t.timestamps
    end
  end
end
