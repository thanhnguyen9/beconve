class CreateBusinessHours < ActiveRecord::Migration
  def change
    create_table :business_hours do |t|
      t.integer :user_id
      t.text :day
      t.datetime :open_time
      t.datetime :close_time
      t.boolean :open

      t.timestamps null: false
    end
  end
end
