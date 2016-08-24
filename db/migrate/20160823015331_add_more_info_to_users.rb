class AddMoreInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :text
    add_column :users, :address, :string
    add_column :users, :latitude, :string
    add_column :users, :longitude, :string
    add_column :users, :warranty, :text
    add_column :users, :response_time, :text
    add_column :users, :rating, :float
    add_column :users, :device_count, :integer
    add_column :users, :image, :string
    add_column :users, :status, :text, :default => "false"
  end
end
