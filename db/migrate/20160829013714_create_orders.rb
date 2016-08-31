class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :location
      t.text :device
      t.text :model
      t.text :color
      t.text :issue
      t.integer :price
      t.string :customer_id
      t.integer :user_id
      t.text :request_status
      t.string :info
      t.text :phone

      t.timestamps null: false
    end
  end
end
