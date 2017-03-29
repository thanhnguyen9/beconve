class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.integer :customer_id
      t.datetime :start_time
      t.datetime :end_time
      t.float :price

      t.timestamps null: false
    end
  end
end
