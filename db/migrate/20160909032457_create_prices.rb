class CreatePrices < ActiveRecord::Migration
  def change
    create_table :prices do |t|
      t.text :device_type
      t.text :model
      t.text :issue
      t.integer :price, :default => 0
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
