class Appointment < ActiveRecord::Base
  belongs_to :user
  belongs_to :customer, class_name: "User"
end
