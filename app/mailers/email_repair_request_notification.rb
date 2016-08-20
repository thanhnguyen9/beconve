class EmailRepairRequestNotification < ApplicationMailer

  def to_tech(tech, order)
    @order = order
    @tech = tech
    mail(
        to: @tech.email,
        subject: 'You have a repair request from BECONVE customer'
    )
  end

  def to_customer(email, order)

  end
end
