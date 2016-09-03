class AddMoreInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :text
    add_column :users, :address, :string
    add_column :users, :phone, :text
    add_column :users, :latitude, :float
    add_column :users, :longitude, :float
    add_column :users, :warranty, :text
    add_column :users, :response_time, :text
    add_column :users, :rating, :float
    add_column :users, :reviews, :integer
    add_column :users, :reviews_link, :string
    add_column :users, :device_count, :integer
    add_column :users, :image, :string
    add_column :users, :status, :text, :default => "offline"
  end
end
