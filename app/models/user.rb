class User < ActiveRecord::Base
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:stripe_connect]

  geocoded_by :address   # can also be an IP address
  # reverse_geocoded_by :latitude, :longitude
  after_validation :geocode, :reverse_geocode, :if => :address_changed?

  has_many :prices

  def self.available(add, model, issue)
    price_select = Price.prices_search_for_model_and_issue(model, issue)
    nearby = User.where(status: 'online').near(add, 10)
    User.joins(:prices).select('prices.*, users.*').merge(nearby).merge(price_select)
  end

  def promote
    self.add_role :host
  end
end
