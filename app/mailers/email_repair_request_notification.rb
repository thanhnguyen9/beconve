class EmailRepairRequestNotification < ApplicationMailer

  def to_tech(order)
    @order = order
    @tech = User.find(order.user_id)
    mail(
        to: @tech.email,
        subject: 'You have a repair request from BECONVE customer'
    )
  end

  def to_customer(order)
    @order = order
    @tech = User.find(order.user_id)
    mail(
        to: @order.customer_email,
        subject: 'You have made a request on BECONVE'
    )
  end
end
