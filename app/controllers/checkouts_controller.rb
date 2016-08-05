class CheckoutsController < ActionController::Base

  TRANSACTION_SUCCESS_STATUSES = [
      Braintree::Transaction::Status::Authorizing,
      Braintree::Transaction::Status::Authorized,
      Braintree::Transaction::Status::Settled,
      Braintree::Transaction::Status::SettlementConfirmed,
      Braintree::Transaction::Status::SettlementPending,
      Braintree::Transaction::Status::Settling,
      Braintree::Transaction::Status::SubmittedForSettlement,
  ]

  def new
    render inline:Braintree::ClientToken.generate
  end

  def create
    result = Braintree::Transaction.sale(transaction_params)

    if result.transaction
      if result.success?
          response = {result: 'success'}
      else
        response = {result: result.transaction.status}
      end
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
