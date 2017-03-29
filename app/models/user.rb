class User < ActiveRecord::Base
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:stripe_connect]

  geocoded_by :address   # can also be an IP address
  # reverse_geocoded_by :latitude, :longitude
  after_validation :geocode, :reverse_geocode, :if => :address_changed?

  has_many :appointments
  has_many :customers, through: :appointments, class_name: "User"

  def promote
    self.add_role :host
  end
end
