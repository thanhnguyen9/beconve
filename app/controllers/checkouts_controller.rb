class CheckoutsController < ActionController::Base

  def new
    render inline:Braintree::ClientToken.generate
  end

  def create
    result = Braintree::Transaction.sale(transaction_params)

    if result.success? || result.transaction
      response = {result: 'success'}
    else
      error_messages = result.errors.map { |error| "Error: #{error.code}: #{error.message}" }
      response = {result: error_messages}
    end
    render json:response
  end

  private
  def transaction_params
    nonce = params[:payment_method_nonce]
    {
        amount: params[:price],
        :payment_method_nonce => nonce,
        customer: {
            first_name: 'Thanh',
            last_name: 'Nguyen',
            email: 'people8604@yahoo.com',
            id: 1,
            phone: '2542146688'
        },
        :options => {
            :submit_for_settlement => true
        }
    }
  end
end
