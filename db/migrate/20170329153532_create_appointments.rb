class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.integer :customer_id
      t.time :start_time
      t.time :end_time
      t.float :price

      t.timestamps null: false
    end
  end
end
