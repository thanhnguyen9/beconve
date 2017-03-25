class CreateAvailableCities < ActiveRecord::Migration
  def change
    create_table :available_cities do |t|
      t.text :name
      t.float :longitude
      t.float :latitude

      t.timestamps null: false
    end
  end
end
