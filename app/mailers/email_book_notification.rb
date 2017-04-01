class EmailBookNotification < ApplicationMailer

  def to_shop(appointment)
    @appointment = appointment
    @shop = User.find(appointment.user_id)
    @customer = User.find(appointment.customer_id)
    mail(
        to: @shop.email,
        subject: 'A Customer has schedule an appointment on BECONVE'
    )
  end

  def to_customer(appointment)
    @appointment = appointment
    @customer = User.find(appointment.customer_id)
    @shop = User.find(appointment.user_id)
    mail(
        to: @customer.email,
        subject: 'You have sheduled an appointment on BECONVE'
    )
  end
end
