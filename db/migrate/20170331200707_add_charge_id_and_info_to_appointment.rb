class AddChargeIdAndInfoToAppointment < ActiveRecord::Migration
  def change
    add_column :appointments, :stripe_customer_id, :text
    add_column :appointments, :info, :text
    add_column :appointments, :amount_charged, :float
  end
end
